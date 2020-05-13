import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateUserInputType } from './create-user.input';

import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(createUserInput: CreateUserInputType): Promise<User> {
    const { username, email, password } = createUserInput;

    const user = this.create();
    user.id = uuid();
    user.username = username;
    user.email = email;
    user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(12));
    try {
      return await this.save(user);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async validateUserPassword(
    createUserInput: CreateUserInputType,
  ): Promise<string> {
    console.log('here')
    const { username, password } = createUserInput;

    const user = await this.findOne({ username });
    if (user && user.validatePassword(password)) return user.username;
    else return null;
  }
}

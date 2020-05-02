import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateUserInputType } from './create-user.input';

import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcryptjs';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signUp(createUserInput: CreateUserInputType): Promise<UserEntity> {
    const { username, email, password } = createUserInput;

    const user = this.create();
    user.id = uuid();
    user.username = username;
    user.email = email;
    user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(12));
    try {
      return await user.save();
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }
}

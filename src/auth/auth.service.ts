import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserInputType } from './create-user.input';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private authRepository: Repository<UserEntity>,
  ) {}

  createUser(createUserInput: CreateUserInputType): Promise<UserEntity> {
    const { username, email, password } = createUserInput;

    const user = this.authRepository.create({
      id: uuidv4(),
      username,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(12)),
    });
    try {
      return this.authRepository.save(user);
    } catch (err) {
      // See apollo-server docs to catch GraphQL errors
      throw new Error('Email or username is already taken');
    }
  }
}

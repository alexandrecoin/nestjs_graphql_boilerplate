import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInputType } from './create-user.input';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  signUp(createUserInput: CreateUserInputType): Promise<User> {
    return this.userRepository.signUp(createUserInput);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id) {
    return await this.userRepository.findOne({id})
  }
}

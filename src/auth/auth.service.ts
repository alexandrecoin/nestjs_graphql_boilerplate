import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInputType } from './inputs/create-user.input';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  signUp(createUserInput: CreateUserInputType): Promise<UserEntity> {
    return this.userRepository.signUp(createUserInput);
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}

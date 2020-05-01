import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserInputType } from './create-user.input';
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
      password,
    });
    return this.authRepository.save(user);
  }
}

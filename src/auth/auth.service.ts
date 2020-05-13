import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInputType } from './create-user.input';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private readonly mailerService: MailerService,
  ) {}

  async signUp(createUserInput: CreateUserInputType): Promise<User> {
    const user = await this.userRepository.signUp(createUserInput);
    this.mailerService
      .sendMail({
        to: user.email,
        from: 'noreply@nestjs.com',
        subject: 'Thank you for your subscription',
        template: 'Signup',
        context: {
          username: user.username,
        },
      })
      .catch(err => {
        console.log({ err });
      });
    return user;
  }

  async signIn(createUserInput: CreateUserInputType) {
    const username = await this.userRepository.validateUserPassword(createUserInput);
    // Throw GraphQL error if (!username)
    return username;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id) {
    return await this.userRepository.findOne({ id });
  }
}

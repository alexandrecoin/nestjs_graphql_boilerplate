import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserInputType } from './create-user.input';

import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private readonly mailerService: MailerService,
    private readonly jwtServive: JwtService,
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

  async signIn(createUserInput: CreateUserInputType): Promise<string> {
    const username = await this.userRepository.validateUserPassword(
      createUserInput,
    );
    // Throw GraphQL error if (!username)
    // Add role to the user once role is setup
    if (!username) throw new UnauthorizedException();
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtServive.sign(payload);
    return accessToken;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id) {
    return await this.userRepository.findOne({ id });
  }
}

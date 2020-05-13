import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserRepository } from './user.repository';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'superSecretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}

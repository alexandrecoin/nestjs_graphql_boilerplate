import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './user.types';
import { CreateUserInputType } from './create-user.input';
import { UserEntity } from './user.entity';
import { AuthService } from './auth.service';

@Resolver(() => UserType)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserType)
  signUp(
    @Args('createUserInput') createUserInput: CreateUserInputType,
  ): Promise<UserEntity> {
    return this.authService.signUp(createUserInput);
  }
}

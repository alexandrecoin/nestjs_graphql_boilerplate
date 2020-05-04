import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserType } from './types/user.types';
import { CreateUserInputType } from './inputs/create-user.input';
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

  @Query(() => [UserType])
  getUsers(): Promise<UserEntity[]> {
    return this.authService.getUsers()
  }
}

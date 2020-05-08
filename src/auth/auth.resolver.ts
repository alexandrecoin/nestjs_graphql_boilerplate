import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserType } from './user.type';
import { CreateUserInputType } from './create-user.input';
import { User } from './user.entity';
import { AuthService } from './auth.service';

@Resolver(() => UserType)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => [UserType])
  getUsers(): Promise<User[]> {
    return this.authService.getUsers()
  }

  @Query(() => UserType)
  getUser(@Args('id') id: string) {
    return this.authService.getUser(id);
  }

  @Mutation(() => UserType)
  signUp(
    @Args('createUserInput') createUserInput: CreateUserInputType,
  ): Promise<User> {
    return this.authService.signUp(createUserInput);
  }

}

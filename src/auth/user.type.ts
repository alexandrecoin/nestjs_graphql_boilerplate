import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Role } from './role.enum';

@ObjectType('User')
export class UserType {
  @Field(type => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: Role.USER;
}

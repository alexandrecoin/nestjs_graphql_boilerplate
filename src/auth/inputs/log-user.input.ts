import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LogUserInputType {

  @Field()
  email: string;

  @Field()
  password: string;
}

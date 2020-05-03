import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateMealInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

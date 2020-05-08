import { Field, InputType, ID } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateMealInput {
  @MinLength(4)
  @Field()
  name: string;

  @Field()
  description: string;
}

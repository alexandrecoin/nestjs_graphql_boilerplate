import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateMealInput {
  @Field()
  name: string;

  @Field()
  description: string;
}
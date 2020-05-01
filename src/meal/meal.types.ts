import { Field, ID } from '@nestjs/graphql';

export class MealType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

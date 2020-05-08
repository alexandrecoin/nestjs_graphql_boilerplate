import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Meal')
export class MealType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

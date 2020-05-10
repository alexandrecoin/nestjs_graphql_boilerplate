import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Physical')
export class PhysicalType {
  @Field(id => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  durationMinutes: number;

  @Field()
  date: Date;
}
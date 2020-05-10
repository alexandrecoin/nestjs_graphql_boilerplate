import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreatePhysicalInput {
  @Field()
  name: string;

  @Field()
  durationMinutes: number;

  @Field()
  date: Date;
}
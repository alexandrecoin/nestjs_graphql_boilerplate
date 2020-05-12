import { Field, InputType} from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateArticleInput {
  @MinLength(4)
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  body: string;

  @Field()
  author: string;
}

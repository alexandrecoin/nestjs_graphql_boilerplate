import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Article')
export class ArticleType {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  body: string;

  @Field()
  author: string;

  @Field()
  datePosted: string;
}

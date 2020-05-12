import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { CreateArticleInput } from './create-article.input';
import { ArticleType } from './article.type';

@Resolver(of => ArticleType)
export class ArticleResolver {
  constructor(private articleService: ArticleService) {}

  @Query(returns => [ArticleType])
  getArticles() {
    return this.articleService.getArticles();
  }

  @Query(returns => ArticleType)
  getArticle(@Args('id') id: string) {
    return this.articleService.getArticle(id);
  }

  @Mutation(returns => ArticleType)
  addArticle(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
    return this.articleService.addArticle(createArticleInput);
  }
}

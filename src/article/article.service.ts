import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async getArticle(id: string): Promise<Article> {
    const article = await this.articleRepository.findOne({ id });
    return article;
  }

  async getArticles(): Promise<Article[]> {
    const articles = await this.articleRepository.find();
    return articles;
  }

  async addArticle(createArticleInput): Promise<Article> {
    const { title, description, body, author } = createArticleInput;
    const datePosted = new Date().toISOString();

    const newArticle = this.articleRepository.create({
      id: uuidv4(),
      title,
      description,
      body,
      author,
      datePosted,
    });
    return this.articleRepository.save(newArticle);
  }
}

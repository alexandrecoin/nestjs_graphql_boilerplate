import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';

import { Article } from './article/article.entity';
import { User } from './auth/user.entity';

import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/side_meals',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Article, User],
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    MailerModule.forRoot({
      transport: `smtps://${process.env.MAILER_DOMAIN}:${process.env.MAILER_PASSWORD}@${process.env.SMTP_PROVIDER}`,
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      preview: true,
      template: {
        dir: process.cwd() + '/src/templates',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    ArticleModule,
    AuthModule,
  ],
})
export class AppModule {}

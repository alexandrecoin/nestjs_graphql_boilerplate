import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { MealModule } from './meal/meal.module';
import { MealEntity } from './meal/meal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [MealEntity],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    MealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

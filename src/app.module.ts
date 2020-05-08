import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealModule } from './meal/meal.module';
import { Meal } from './meal/meal.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/side_meals',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Meal, User]
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    MealModule,
    AuthModule,
  ],
})
export class AppModule {}

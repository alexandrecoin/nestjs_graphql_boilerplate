import { Module } from '@nestjs/common';
// Libraries
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// App modules
import { MealModule } from './meal/meal.module';
import { AuthModule } from './auth/auth.module';
// Entities
import { MealEntity } from './meal/meal.entity';
import { UserEntity } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/sideproject',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [MealEntity, UserEntity],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    MealModule,
    AuthModule,
  ],
})
export class AppModule {}

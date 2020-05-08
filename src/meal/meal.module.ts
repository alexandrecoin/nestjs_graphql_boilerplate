import { Module } from '@nestjs/common';
import { MealResolver } from './meal.resolver';
import { MealService } from './meal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from './meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meal])],
  providers: [MealResolver, MealService],
})
export class MealModule {}

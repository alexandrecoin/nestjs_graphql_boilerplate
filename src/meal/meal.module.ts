import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealEntity } from './meal.entity';
import { MealResolver } from './meal.resolver';

@Module({
  providers: [MealService, MealResolver],
  imports: [TypeOrmModule.forFeature([MealEntity])],
})
export class MealModule {}

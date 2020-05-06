import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MealEntity } from './meal.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(MealEntity)
    private mealRepository: Repository<MealEntity>,
  ) {}

  async getMeals(): Promise<MealEntity[]> {
    const meals = await this.mealRepository.find();
    return meals;
  }

  async getMeal(name: string): Promise<MealEntity> {
    const meal = await this.mealRepository.findOne(name);
    return meal;
  }

  async addMeal(createMealInput): Promise<MealEntity> {
    const { name, description } = createMealInput;
    const newMeal = this.mealRepository.create({
      id: uuidv4(),
      name,
      description,
    });
    return this.mealRepository.save(newMeal);
  }
}

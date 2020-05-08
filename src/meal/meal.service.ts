import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meal } from './meal.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal)
    private mealRepository: Repository<Meal>,
  ) {}

  async getMeal(id: string): Promise<Meal>{
    const meal = await this.mealRepository.findOne({id})
    return meal;
  }

  async getMeals(): Promise<Meal[]> {
    const meals = await this.mealRepository.find();
    return meals;
  }

  async addMeal(createMealInput): Promise<Meal> {
    const { name, description } = createMealInput;
    
    const newMeal = this.mealRepository.create({
      id: uuidv4(),
      name,
      description,
    });
    return this.mealRepository.save(newMeal);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MealService } from './meal.service';
import { CreateMealInput } from './create-meal.input';
import { MealType } from './meal.types';

@Resolver(() => MealType)
export class MealResolver {
  constructor(private mealService: MealService) {}

  @Query(() => [MealType])
  getMeals() {
    return this.mealService.getMeals();
  }

  @Mutation(() => MealType)
  addMeal(@Args('createMealInput') createMealInput: CreateMealInput) {
    return this.mealService.addMeal(createMealInput);
  }
}

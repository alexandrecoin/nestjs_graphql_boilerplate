import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MealService } from './meal.service';
import { CreateMealInput } from './inputs/create-meal.input';
import { MealType } from './types/meal.types';
import { Param } from '@nestjs/common';

@Resolver(() => MealType)
export class MealResolver {
  constructor(private mealService: MealService) {}

  @Query(() => [MealType])
  getMeals() {
    return this.mealService.getMeals();
  }

  @Query(() => MealType)
  getMeal(@Param('name') name: string) {
    return this.mealService.getMeal(name);
  }

  @Mutation(() => MealType)
  addMeal(@Args('createMealInput') createMealInput: CreateMealInput) {
    return this.mealService.addMeal(createMealInput);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MealService } from './meal.service';
import { CreateMealInput } from './create-meal.input';
import { MealType } from './meal.type';

@Resolver(of => MealType)
export class MealResolver {
  constructor(private mealService: MealService) {}

  @Query(returns => [MealType])
  getMeals() {
    return this.mealService.getMeals();
  }

  @Query(returns => MealType)
  getMeal(@Args('id') id: string) {
    return this.mealService.getMeal(id);
  }

  @Mutation(returns => MealType)
  addMeal(@Args('createMealInput') createMealInput: CreateMealInput) {
    return this.mealService.addMeal(createMealInput);
  }
}

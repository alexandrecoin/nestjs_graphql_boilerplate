import { Resolver, Query } from '@nestjs/graphql';
import { MealType } from './meal.types';
import { MealService } from './meal.service';

@Resolver(of => MealType)
export class MealResolver {
  constructor(private mealService: MealService) {}

  @Query(returns => String)
  getMeal() {
    return this.mealService.getMeal();
  }
}

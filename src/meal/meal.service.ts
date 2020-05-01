import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MealEntity } from './meal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(MealEntity)
    private mealRepository: Repository<MealEntity>,
  ) {}

  getMeal() {
    return 'Ca maaaaarche'
  }
}

import { ObjectIdColumn, PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('Meal')
export class MealEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}

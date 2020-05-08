import { ObjectIdColumn, PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Meal {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}

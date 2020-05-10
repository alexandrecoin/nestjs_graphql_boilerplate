import { Entity, PrimaryColumn, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Physical {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  durationMinutes: number;

  @Column()
  date: Date;

  // Associate user to physical activity
}
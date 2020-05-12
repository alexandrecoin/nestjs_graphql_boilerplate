import { ObjectIdColumn, PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Article {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  body: string;

  @Column()
  author: string;

  @Column()
  datePosted: string;
}
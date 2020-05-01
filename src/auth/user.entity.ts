import {
  Entity,
  BaseEntity,
  ObjectIdColumn,
  PrimaryColumn,
  Column,
} from 'typeorm';

@Entity('User')
export class UserEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

import {
  Entity,
  BaseEntity,
  ObjectIdColumn,
  PrimaryColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity('User')
@Unique(['username', 'email'])
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

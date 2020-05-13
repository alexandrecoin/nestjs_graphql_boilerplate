import {
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
  Column,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('User')
@Unique(['username', 'email'])
export class User {
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

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
  }
}

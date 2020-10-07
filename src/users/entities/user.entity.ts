import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UserRole } from '../../common/enums/user-role';

@Entity()
@Unique(['username'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @Column({ nullable: false })
  role: UserRole;
}

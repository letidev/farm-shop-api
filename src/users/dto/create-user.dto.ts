import { IsNotEmpty } from 'class-validator';
import { UserRole } from '../../common/enums/user-role';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: UserRole;
}

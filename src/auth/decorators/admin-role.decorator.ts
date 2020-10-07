import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../common/enums/user-role';

export const AdminRole = () =>
  SetMetadata<string, UserRole[]>('role', [UserRole.ADMINISTRATOR]);

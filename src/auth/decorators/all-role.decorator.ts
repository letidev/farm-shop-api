import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../common/enums/user-role';

export const AllRole = () =>
  SetMetadata<string, UserRole[]>('role', [
    UserRole.ADMINISTRATOR,
    UserRole.CUSTOMER,
  ]);

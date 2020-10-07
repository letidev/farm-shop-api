import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../common/enums/user-role';

export const CustomerRole = () =>
  SetMetadata<string, UserRole[]>('role', [UserRole.CUSTOMER]);

import { User } from '@shared/models';
import { Role } from '@shared/enums';

export interface UserRequest {
  companyId: number;
  email: string;
  name: string;
  role: Role;
}

export type UserResponse = User;

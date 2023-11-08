import { Permission, Role } from '../../enums';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  permissions: Permission[];
}

import { Role } from '@shared/enums';

export interface User {
  email: string;
  name: string;
  role: Role;
  id: number;
}

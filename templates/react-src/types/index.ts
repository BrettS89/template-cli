import { Paginated } from '@feathersjs/feathers';
import Resource from './resource';

export interface User extends Resource {
  email: string;
  password: string;
}

export interface Role extends Resource {
  name: string;
}

export type Users = Paginated<User>;
export type Roles = Paginated<Role>;

import { ValidatorFn } from '@angular/forms';

export interface UserManagement {
  users: UserMaster[];
  roles: RoleMaster[];
  errors: Errors;
}

export interface UserMaster {
  id: number;
  usrId: string;
  usrName: string;
  roleMasterId: number;
  usrDisplayname: string;
  usrPassword: string;
  usrMobileNo: string;
  usrEmailId: string;
  usrIsDapuser: boolean;
  usrIsActive: boolean;
  usrIsDeleted: boolean;
  usrDeletedDate: number;
  usrDeletedBy: string;
  roles: RoleMaster[];
}

export interface RoleMaster {
  id: number;
  roleId: string;
  roleName: string;
  roleDesc: string;
  createdBy: string;
  createdDate: number;
  isDeleted: boolean;
  deletedBy: string;
  deletedDate: number;
}

export type FieldType = 'INPUT' | 'TEXTAREA';

export interface Errors {
  [key: string]: string;
}

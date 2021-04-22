import { ValidatorFn } from '@angular/forms';

export interface AdminManagement {
  zones: ZoneMaster[];
  zonecoords: ZoneCoords[];
  menus: MenuMaster[];
  vmss:VMSMaster[];
  errors: Errors;
}

export interface AdminMaster {
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

export interface ZoneMaster{
  id:number;
  zoneId:string;
  zoneName:string;
  description:string;
  isDeleted:boolean;
  deletedBy : string;
  zoneCoords:ZoneCoords[];
}

export interface VMSMaster{
  id:number;
  vmsId:string;
  vmsSrNo:string;
  vmsDescription:string;
  isActive:boolean;
  isDeleted:boolean;
  deletedDate:number;
  zoneMasterId:number;
  latitude:number;
  longitude:number;
  contrastCtrl:number;
  width:number;
  brightnessCtrl:number;
  dimmingCtrl:number;
  staticIp:string;
  zoneMaster:ZoneMaster[];
}

export interface ZoneCoords{
  id:number;
  zoneMasterId:number;
  seqno:number;
  latitude:number;
  longitude:number;
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

export interface MenuMaster {
  id: number;
  menuId: string;
  menuName: string;
  menuItemDesc: string;
  menuUrl: string;
  createdBy: string;
  createdDate: number;
  isDeleted: boolean;
  deletedBy: string;
  deletedDate: number;
}

export interface RoleMenuRelation
{
id:number;
roleMasterId:number;
menuMasterId:number;
accessAdd:boolean;
accessView:boolean;
accessEdit:boolean;
accessDelete:boolean;
createdBy: string;
createdDate:number;
isDeleted:boolean;
deletedBy:string;
deletedDate:number;
menuMaster:MenuMaster[];
roleMaster:RoleMaster[];
}

export type FieldType = 'INPUT' | 'TEXTAREA';

export interface Errors {
  [key: string]: string;
}

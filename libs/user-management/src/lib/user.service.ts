import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  MenuMaster,
  RoleMaster,
  UserMaster,
  RoleMenuRelation,
} from './+state/user.interfaces';

export interface UserMasterModel {
  mstUser: UserMaster;
}

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  getUsers(): Observable<UserMaster[]> {
    return this.apiService.get<UserMaster[]>('User_API/api/User/GetUserMaster');
  }
  getRoles(): Observable<RoleMaster[]> {
    return this.apiService.get<RoleMaster[]>('User_API/api/Role/GetRoles');
  }
  getRoleById(roleId: number): Observable<RoleMaster> {
    return this.apiService.get<RoleMaster>(
      'User_API/api/Role/GetRolesById?id=' + roleId
    );
  }
  getMenuMaster(): Observable<MenuMaster[]> {
    return this.apiService.get<MenuMaster[]>(
      'User_API/api/MenuMaster/getMenuMaster'
    );
  }

  getRoleMenus(roleId: number): Observable<RoleMenuRelation[]> {
    return this.apiService.get<RoleMenuRelation[]>(
      'User_API/api/RoleMenu/GetRoleMenuRelations?roleId=' + roleId
    );
  }

  submitUser(mstUser: UserMaster): Observable<any> {
    return this.apiService.post<any, UserMaster>(
      'User_API/api/User/PostUserMaster',
      mstUser
    );
  }

  updateUser(mstUser: UserMaster): Observable<any> {
    return this.apiService.post<any, UserMaster>(
      'User_API/api/User/PutUserMaster',
      mstUser
    );
  }

  submitRole(mstRole: RoleMaster): Observable<any> {
    return this.apiService.post<any, RoleMaster>(
      'User_API/api/Role/PostRoleMaster',
      mstRole
    );
  }

  submitRoleMenu(mstRoleMenu: RoleMenuRelation): Observable<any> {
    return this.apiService.post<any, RoleMenuRelation>(
      'User_API/api/RoleMenu/PostRoleMenuRelation',
      mstRoleMenu
    );
  }

  updateRoleMenu(mstRoleMenu: RoleMenuRelation): Observable<any> {
    return this.apiService.post<any, RoleMenuRelation>(
      'User_API/api/RoleMenu/PutRoleMenuRelation',
      mstRoleMenu
    );
  }

  submitMenu(mstRole: MenuMaster): Observable<any> {
    return this.apiService.post<any, MenuMaster>(
      'User_API/api/MenuMaster/PostMenuMaster',
      mstRole
    );
  }

  updateRole(mstRole: RoleMaster): Observable<any> {
    return this.apiService.post<any, RoleMaster>(
      'User_API/api/Role/PutRoleMaster',
      mstRole
    );
  }
}
export class SharedData {
  data: Subject<string> = new Subject();
  constructor() {}
}

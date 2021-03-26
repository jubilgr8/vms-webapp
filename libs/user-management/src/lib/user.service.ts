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
  getMenuMaster(): Observable<MenuMaster[]> {
    return this.apiService.get<MenuMaster[]>(
      'User_API/api/MenuMaster/getMenuMaster'
    );
  }
  submitUser(mstUser: UserMaster): Observable<any> {
    return this.apiService.post<any, UserMaster>(
      'User_API/api/User/PostUserMaster',
      mstUser
    );
  }
  submitRole(mstRoleMenu: RoleMenuRelation): Observable<any> {
    return this.apiService.post<any, RoleMenuRelation>(
      'User_API/api/RoleMenu/PostRoleMenuRelation',
      mstRoleMenu
    );
  }
  submitMenu(mstRole: MenuMaster): Observable<any> {
    return this.apiService.post<any, MenuMaster>(
      'User_API/api/MenuMaster/PostMenuMaster',
      mstRole
    );
  }
}
export class SharedData {
  data: Subject<string> = new Subject();
  constructor() {}
}

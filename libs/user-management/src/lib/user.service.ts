import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleMaster, UserMaster } from './+state/user.interfaces';

export interface UserMasterModel {
  mstUser: UserMaster;
}

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  getUsers(): Observable<UserMaster[]> {
    return this.apiService.get<UserMaster[]>('User/GetUserMaster');
  }
  getRoles(): Observable<RoleMaster[]> {
    return this.apiService.get<RoleMaster[]>('Role/GetRoles');
  }
  submitUser(mstUser: UserMaster): Observable<any> {
    return this.apiService.post<any, UserMaster>(
      'User/PostUserMaster',
      mstUser
    );
  }
}

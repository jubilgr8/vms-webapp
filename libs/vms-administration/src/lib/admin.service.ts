import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MenuMaster,
  RoleMaster,
  AdminMaster,
  RoleMenuRelation,
  ZoneMaster,
  VMSMaster,
} from './+state/admin.interfaces';

export interface AdminMasterModel {
  mstAdmin: AdminMaster;
}

@Injectable()
export class AdminService {
  constructor(private apiService: ApiService) {}

  getZones(): Observable<ZoneMaster[]> {
    return this.apiService.get<ZoneMaster[]>(
      'Administration_API/api/ZoneMaster/GetZones'
    );
  }

  getVms(): Observable<VMSMaster[]> {
    return this.apiService.get<VMSMaster[]>(
      'Administration_API/api/VMSMaster/GetVmsMasterDetails'
    );
  }
  getZoneById(zoneId: string): Observable<ZoneMaster> {
    return this.apiService.get<ZoneMaster>(
      'Administration_API/api/ZoneMaster/GetZonesById?id=' + zoneId
    );
  }
  // getRoles(): Observable<RoleMaster[]> {
  //   return this.apiService.get<RoleMaster[]>('User_API/api/Role/GetRoles');
  // }
  // getMenuMaster(): Observable<MenuMaster[]> {
  //   return this.apiService.get<MenuMaster[]>('User_API/api/MenuMaster/getMenuMaster');
  // }
  // submitUser(mstUser: AdminMaster): Observable<any> {
  //   return this.apiService.post<any, AdminMaster>(
  //     'User_API/api/User/PostUserMaster',
  //     mstUser
  //   );
  // }
  submitZone(zoneMaster: ZoneMaster): Observable<any> {
    return this.apiService.post<any, ZoneMaster>(
      'Administration_API/api/ZoneMaster/PostZoneMaster',
      zoneMaster
    );
  }
  // submitMenu(mstRole: MenuMaster): Observable<any> {
  //   return this.apiService.post<any, MenuMaster>(
  //     'User_API/api/MenuMaster/PostMenuMaster',
  //     mstRole
  //   );
  // }
}

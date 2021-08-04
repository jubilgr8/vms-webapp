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
  submitZone(zoneMaster: ZoneMaster): Observable<any> {
    return this.apiService.post<any, ZoneMaster>(
      'Administration_API/api/ZoneMaster/PostZoneMaster',
      zoneMaster
    );
  }
  updateZone(zoneMaster:ZoneMaster):Observable<any> {
    return this.apiService.post<any, ZoneMaster>(
      'Administration_API/api/ZoneMaster/PutZoneMaster',
      zoneMaster
    );
  }
}

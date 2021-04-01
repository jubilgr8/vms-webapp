import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from './models/filter.model';
import { VMS } from './models/vms.model';

@Injectable()
export class DashboardService {
  constructor(private apiService: ApiService) {}

  getFilters(): Observable<Filter> {
    return this.apiService.get<Filter>(
      'Dashboard_API/api/Dashboard/GetDashboardDetails'
    );
  }

  getVMSList(): Observable<VMS[]> {
    return this.apiService.get<VMS[]>(
      'Dashboard_API/api/Dashboard/GetDashboarListView'
    );
  }

  getVMSData(vmsId: string): Observable<any> {
    return this.apiService.get<any>(
      'Dashboard_API/api/Dashboard/GetMapDataByVMS?Id=' + vmsId
    );
  }
}

import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from './models/filter.model';

@Injectable()
export class DashboardService {
  constructor(private apiService: ApiService) {}

  getFilters(): Observable<Filter[]> {
    return this.apiService.get<Filter[]>('Dashboard/GetFilters');
  }

}

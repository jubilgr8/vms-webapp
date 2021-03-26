import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DashboardState } from './dashboard.reducer';
import { dashboardQuery } from './dashboard.selectors';
import * as dashboardActions from './dashboard.actions';

@Injectable()
export class DashboardFacade {
  isLoading$ = this.store.select(dashboardQuery.isLoading);
  filters$ = this.store.select(dashboardQuery.getFilters);
  vmsList$ = this.store.select(dashboardQuery.getVMSList);
  vmsData$ = this.store.select(dashboardQuery.getVMSData);

  constructor(private store: Store<DashboardState>) {}

  
  getFilters() {
    this.store.dispatch(dashboardActions.getFilters());
  }
  getVMSList() {
    this.store.dispatch(dashboardActions.getVMSList());
  }
  getVMSData(vmsId: string) {
    this.store.dispatch(dashboardActions.getVMSData({ vmsId }));
  }
}

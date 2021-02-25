import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DashboardState } from './dashboard.reducer';
import { dashboardQuery } from './dashboard.selectors';
import * as dashboardActions from './dashboard.actions';

@Injectable()

export class DashboardFacade {
  filters$ = this.store.select(dashboardQuery.getFilters);

  constructor(private store: Store<DashboardState>) {}

  getFilters() {
    this.store.dispatch(dashboardActions.getDashboard());
  }

}

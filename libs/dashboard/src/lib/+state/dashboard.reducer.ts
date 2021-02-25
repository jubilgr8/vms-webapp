import { createReducer, Action, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { Filter } from '../models/filter.model';
import { VMS } from '../models/vms.model';

export const dashboardFeatureKey = 'auth';

export interface Dashboard {
  onlineCount: number;
  offlineCount: number;
  totalCount: number;
  filters: Filter[];
  vmsList: VMS[];
}

export interface DashboardState {
  readonly [dashboardFeatureKey]: Dashboard;
}


export const dashboardInitialState: Dashboard = {
  onlineCount: 0,
  offlineCount: 0,
  totalCount: 0,
  filters: null,
  vmsList: null
};

const reducer = createReducer(
  dashboardInitialState,
  on(DashboardActions.getFilters, (state, action) => ({
    ...state,
  })),
  on(DashboardActions.getFilterSuccess, (state, action) => ({
    ...state,
    filters: action.filters
  })),
);

export function dashboardReducer(state: Dashboard | undefined, action: Action): Dashboard {
  return reducer(state, action);
}

import { createReducer, Action, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { Filter } from '../models/filter.model';
import { VMS } from '../models/vms.model';

export const dashboardFeatureKey = 'auth';

export interface Dashboard {
  isLoading: boolean;
  onlineCount: number;
  offlineCount: number;
  totalCount: number;
  filters: Filter;
  vmsList: VMS[];
  vmsData: any;
}

export interface DashboardState {
  readonly [dashboardFeatureKey]: Dashboard;
}

export const dashboardInitialState: Dashboard = {
  isLoading: false,
  onlineCount: 0,
  offlineCount: 0,
  totalCount: 0,
  filters: null,
  vmsList: null,
  vmsData: null,
};

const reducer = createReducer(
  dashboardInitialState,
  on(DashboardActions.getFilters, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(DashboardActions.getFilterSuccess, (state, action) => ({
    ...state,
    filters: action.filters,
    isLoading: false,
  })),
  on(DashboardActions.getVMSList, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(DashboardActions.getVMSListSuccess, (state, action) => ({
    ...state,
    vmsList: action.vmsList,
    isLoading: false,
  })),
  on(DashboardActions.getVMSData, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(DashboardActions.getVMSDataSuccess, (state, action) => ({
    ...state,
    vmsData: action.vmsData,
    isLoading: false,
  }))
);

export function dashboardReducer(
  state: Dashboard | undefined,
  action: Action
): Dashboard {
  return reducer(state, action);
}

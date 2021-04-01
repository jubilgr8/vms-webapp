import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dashboard, dashboardFeatureKey } from './dashboard.reducer';

export const getDashboard = createFeatureSelector<Dashboard>(
  dashboardFeatureKey
);
export const isLoading = createSelector(
  getDashboard,
  (dashboard: Dashboard) => dashboard.isLoading
);
export const getFilters = createSelector(
  getDashboard,
  (dashboard: Dashboard) => dashboard.filters
);
export const getVMSList = createSelector(
  getDashboard,
  (dashboard: Dashboard) => dashboard.vmsList
);
export const getVMSData = createSelector(
  getDashboard,
  (dashboard: Dashboard) => dashboard.vmsData
);
// export const getUser = createSelector(getAuth, (auth: Auth) => auth.user);

export const dashboardQuery = {
  getDashboard,
  getFilters,
  getVMSList,
  getVMSData,
  isLoading,
};

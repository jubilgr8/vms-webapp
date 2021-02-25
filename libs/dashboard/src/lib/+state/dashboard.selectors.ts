import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dashboard, dashboardFeatureKey } from './dashboard.reducer';

export const getDashboard = createFeatureSelector<Dashboard>(dashboardFeatureKey);
export const getFilters = createSelector(getDashboard, (dashboard: Dashboard) => dashboard.filters);
// export const getUser = createSelector(getAuth, (auth: Auth) => auth.user);

export const dashboardQuery = {
  getDashboard,
  getFilters,
};

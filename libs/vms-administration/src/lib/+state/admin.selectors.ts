import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AdminManagement } from './admin.interfaces';
import { adminFeatureKey } from './admin.reducer';

export const getAdminManagement = createFeatureSelector<AdminManagement>(
  adminFeatureKey
);
export const getZones = createSelector(
  getAdminManagement,
  (adminMngmnt: AdminManagement) => adminMngmnt.zones
);
export const getZoneCoords = createSelector(
  getAdminManagement,
  (userManagement: AdminManagement) => userManagement.zonecoords
);
export const getMenus = createSelector(
  getAdminManagement,
  (userManagement: AdminManagement) => userManagement.menus
);

export const usersQuery = {
  getAdminManagement,
  getZones,
  getZoneCoords,
  getMenus,
};

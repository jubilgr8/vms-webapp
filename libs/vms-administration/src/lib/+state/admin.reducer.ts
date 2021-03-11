import { AdminManagement, AdminMaster } from './admin.interfaces';
import * as adminAction from './admin.action';
import { Action, createReducer, on } from '@ngrx/store';

export const adminFeatureKey = 'adminForms';

export interface UserState {
  readonly [adminFeatureKey]: AdminManagement;
}

export const adminInitialState: AdminManagement = {
  zones: null,
  zonecoords: null,
  menus: null,
  errors: {},
};

const reducer = createReducer(
  adminInitialState,
  on(adminAction.getZoneList, (state, action) => ({
    ...state,
  })),
  on(adminAction.getZoneSuccess, (state, action) => ({
    ...state,
    zones: action.zones,
  })),
  // on(adminAction.getRoleList, (state, action) => ({
  //   ...state,
  // })),
  // on(adminAction.getRolesSuccess, (state, action) => ({
  //   ...state,
  //   roles: action.roles,
  // })),
  // on(adminAction.getMenuList, (state,action)=>({
  //   ...state,
  // })),
  // on(adminAction.getMenuSuccess, (state, action) => ({
  //   ...state,
  //   menus: action.menus,
  // })),
);

export function adminReducer(
  state: AdminManagement | undefined,
  action: Action
): AdminManagement {
  return reducer(state, action);
}

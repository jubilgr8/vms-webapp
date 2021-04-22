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
  vmss: null,
  newZoneId: null,
  zone: null,
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
  on(adminAction.getVmsList, (state, action) => ({
    ...state,
  })),
  on(adminAction.getVmsSuccess, (state, action) => ({
    ...state,
    vmss: action.vmss,
  })),
  on(adminAction.submitZoneSuccess, (state, action) => ({
    ...state,
    newZoneId: action.paylod,
  })),
  on(adminAction.getZoneByIdSuccess, (state, action) => ({
    ...state,
    zone: action.paylod,
  }))
);

export function adminReducer(
  state: AdminManagement | undefined,
  action: Action
): AdminManagement {
  return reducer(state, action);
}

import {
  Errors,
  MenuMaster,
  RoleMaster,
  ZoneMaster,
  VMSMaster,
} from './admin.interfaces';
import { props, createAction } from '@ngrx/store';

// Zone Details -------------
export const getZoneList = createAction('[Zone] GET_ZONE_LIST');

export const getZoneSuccess = createAction(
  '[Zone] ZONE_LIST_LOADED',
  props<{ zones: ZoneMaster[] }>()
);

export const getZoneFail = createAction(
  '[Zone] ZONES_FAIL',
  props<{ error: Error }>()
);

// VMS Details -------------
export const getVmsList = createAction('[Vms] GET_VMS_LIST');

export const getVmsSuccess = createAction(
  '[Vms] VMS_LIST_LOADED',
  props<{ vmss: VMSMaster[] }>()
);

export const getVmsFail = createAction(
  '[Vms] VMS_FAIL',
  props<{ error: Error }>()
);

export const submitZone = createAction('[ZONE] SUBMIT_NEW_ZONE');

export const submitZoneSuccess = createAction(
  '[ZONE] NEW_ZONE_SUBMITTED',
  props<{ paylod: any }>()
);

export const submitZoneFail = createAction(
  '[ZONE] NEW_ZONE_FAILED',
  props<{ error: Error }>()
);

export const getZoneById = createAction(
  '[ZONE] GET_ZONE_BY_ID',
  props<{ zoneId: string }>()
);

export const getZoneByIdSuccess = createAction(
  '[ZONE] GET_ZONE_SUCCESS',
  props<{ paylod: any }>()
);

export const getZoneByIdFail = createAction(
  '[ZONE] GET_ZONE_FAILED',
  props<{ error: Error }>()
);

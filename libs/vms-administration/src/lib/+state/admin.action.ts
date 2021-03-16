import { Errors, MenuMaster, RoleMaster, ZoneMaster,VMSMaster } from './admin.interfaces';
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

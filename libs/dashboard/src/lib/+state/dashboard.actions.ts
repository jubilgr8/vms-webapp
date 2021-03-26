import { createAction, props } from '@ngrx/store';
import { Filter } from '../models/filter.model';
import { VMS } from '../models/vms.model';

export const getDashboard = createAction('[Dashboard] GET_DASHBOARD');

export const getFilters = createAction('[Dashboard] GET_FILTERS');

export const getFilterSuccess = createAction(
  '[Dashboard] FILTER_SUCCESS',
  props<{ filters: Filter }>()
);

export const getFilterFail = createAction(
  '[Dashboard] FILTER_FAIL',
  props<{ error: Error }>()
);

export const getVMSList = createAction('[Dashboard] GET_VMSLIST');

export const getVMSListSuccess = createAction(
  '[Dashboard] VMSLIST_SUCCESS',
  props<{ vmsList: VMS[] }>()
);

export const getVMSListFail = createAction(
  '[Dashboard] VMSLIST_FAIL',
  props<{ error: Error }>()
);

export const getVMSData = createAction(
  '[Dashboard] GET_VMSData',
  props<{ vmsId: string }>()
);

export const getVMSDataSuccess = createAction(
  '[Dashboard] VMSData_SUCCESS',
  props<{ vmsData: any }>()
);

export const getVMSDataFail = createAction(
  '[Dashboard] VMSData_FAIL',
  props<{ error: Error }>()
);

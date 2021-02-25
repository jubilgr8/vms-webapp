import { createAction, props } from '@ngrx/store';
import { Filter } from '../models/filter.model';

export const getDashboard = createAction('[Dashboard] GET_DASHBOARD');

export const getFilters = createAction('[Dashboard] GET_FILTERS');

export const getFilterSuccess = createAction('[Dashboard] FILTER_SUCCESS', props<{ filters: Filter[] }>());

export const getFilterFail = createAction('[Dashboard] FILTER_FAIL', props<{ error: Error }>());


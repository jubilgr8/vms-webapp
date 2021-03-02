import { User } from 'libs/api/src/index';
import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[auth] GET_USER',
  props<{ authToken: string }>()
);

export const getUserSuccess = createAction(
  '[auth] GET_USER_SUCCESS',
  props<{ isValid: boolean }>()
);

export const getUserFail = createAction(
  '[auth] GET_USER_FAIL',
  props<{ error: Error }>()
);

export const login = createAction('[auth] LOGIN');

export const loginSuccess = createAction(
  '[auth] LOGIN_SUCCESS',
  props<{ user: User }>()
);

export const loginFail = createAction('[auth] LOGIN_FAIL');

export const register = createAction('[auth] REGISTER');

export const registerSuccess = createAction(
  '[auth] REGISTER_SUCCESS',
  props<{ user: User }>()
);

export const registerFail = createAction('[auth] REGISTER_FAIL');

export const logout = createAction('[auth] LOGOUT');

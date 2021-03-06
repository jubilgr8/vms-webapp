import { Errors, RoleMaster, UserMaster } from './user.interfaces';
import { props, createAction } from '@ngrx/store';

export const getUserList = createAction('[User] GET_USER_LIST');

export const getUsersSuccess = createAction(
  '[User] USER_LIST_LOADED',
  props<{ users: UserMaster[] }>()
);

export const getUsersFail = createAction(
  '[User] USERS_FAIL',
  props<{ error: Error }>()
);
export const getRoleList = createAction('[Role] GET_Role_LIST');

export const getRolesSuccess = createAction(
  '[Role] Role_LIST_LOADED',
  props<{ roles: RoleMaster[] }>()
);

export const getRolesFail = createAction(
  '[Role] Roles_FAIL',
  props<{ error: Error }>()
);

export const submitUser = createAction('[User] GET_User_LIST');

export const submitUserSuccess = createAction(
  '[User] New User Submitted',
  props<{ paylod: any }>()
);

export const submitUserFail = createAction(
  '[User] New User Submitted Fail',
  props<{ error: Error }>()
);

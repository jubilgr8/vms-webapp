import { Errors, MenuMaster, RoleMaster, UserMaster } from './user.interfaces';
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
export const getMenuList = createAction('[Menu] GET_Menu_LIST');

export const getMenuSuccess = createAction(
  '[Menu] Menu_LIST_LOADED',
  props<{ menus: MenuMaster[] }>()
);

export const getMenuFail = createAction(
  '[Menu] Menus_FAIL',
  props<{ error: Error }>()
);

export const submitUser = createAction('[User] GET_User_LIST');

export const updateUser = createAction('[User] UPDATE_User_LIST');

export const submitUserSuccess = createAction(
  '[User] New User Submitted',
  props<{ paylod: any }>()
);

export const updateUserSuccess = createAction(
  '[User] User Update Submitted',
  props<{ paylod: any }>()
);

export const submitUserFail = createAction(
  '[User] New User Submitted Fail',
  props<{ error: Error }>()
);

export const updateUserFail = createAction(
  '[User] User Update Fail',
  props<{ error: Error }>()
);

export const submitRole = createAction('[Role] GET_User_LIST');

export const submitRoleSuccess = createAction(
  '[Role] New Role Submitted',
  props<{ paylod: any }>()
);

export const submitRoleFail = createAction(
  '[Role] New Role Submitted Fail',
  props<{ error: Error }>()
);
export const deleteUser = createAction(
  '[USER] Delete User',
  props<{ user: UserMaster }>()
);

export const deleteUserSuccess = createAction(
  '[USER] Delete User Submitted',
  props<{ paylod: any }>()
);

export const deleteUserFail = createAction(
  '[USER] Delete User Submitted Fail',
  props<{ error: any }>()
);


import { Errors, MenuMaster, RoleMaster, ZoneMaster } from './admin.interfaces';
import { props, createAction } from '@ngrx/store';

export const getZoneList = createAction('[Zone] GET_ZONE_LIST');

export const getZoneSuccess = createAction(
  '[Zone] ZONE_LIST_LOADED',
  props<{ zones: ZoneMaster[] }>()
);

export const getZoneFail = createAction(
  '[Zone] ZONES_FAIL',
  props<{ error: Error }>()
);
// export const getRolesSuccess = createAction(
//   '[Zone] Role_LIST_LOADED',
//   props<{ roles: RoleMaster[] }>()
// );

// export const getRolesFail = createAction(
//   '[Zone] Roles_FAIL',
//   props<{ error: Error }>()
// );
// export const getMenuList = createAction('[Menu] GET_Menu_LIST');

// export const getMenuSuccess = createAction(
//   '[Menu] Menu_LIST_LOADED',
//   props<{ menus: MenuMaster[] }>()
// );

// export const getMenuFail = createAction(
//   '[Menu] Menus_FAIL',
//   props<{ error: Error }>()
// );

// export const submitUser = createAction('[User] GET_User_LIST');

// export const submitUserSuccess = createAction(
//   '[User] New User Submitted',
//   props<{ paylod: any }>()
// );

// export const submitUserFail = createAction(
//   '[User] New User Submitted Fail',
//   props<{ error: Error }>()
// );

// export const submitRole = createAction('[Role] GET_User_LIST');

// export const submitRoleSuccess = createAction(
//   '[Role] New Role Submitted',
//   props<{ paylod: any }>()
// );

// export const submitRoleFail = createAction(
//   '[Role] New Role Submitted Fail',
//   props<{ error: Error }>()
// );

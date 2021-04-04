import { UserManagement } from './user.interfaces';
import * as userActions from './user.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const userFeatureKey = 'userForms';

export interface UserState {
  readonly [userFeatureKey]: UserManagement;
}

export const userInitialState: UserManagement = {
  isLoading: false,
  users: null,
  roles: null,
  menus: null,
  errors: {},
};

const reducer = createReducer(
  userInitialState,
  on(userActions.getUserList, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(userActions.getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
    isLoading: false,
  })),
  on(userActions.getRoleList, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(userActions.getRolesSuccess, (state, action) => ({
    ...state,
    roles: action.roles,
    isLoading: false,
  })),
  on(userActions.getMenuList, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(userActions.getMenuSuccess, (state, action) => ({
    ...state,
    menus: action.menus,
    isLoading: false,
  })),
  on(userActions.deleteUser, (state, action) => ({
    ...state,
    isLoading: true,
  }))
);

export function userReducer(
  state: UserManagement | undefined,
  action: Action
): UserManagement {
  return reducer(state, action);
}

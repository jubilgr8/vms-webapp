import { UserManagement } from './user.interfaces';
import * as userActions from './user.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const userFeatureKey = 'userForms';

export interface UserState {
  readonly [userFeatureKey]: UserManagement;
}

export const userInitialState: UserManagement = {
  users: null,
  roles: null,
  errors: {},
};

const reducer = createReducer(
  userInitialState,
  on(userActions.getUserList, (state, action) => ({
    ...state,
  })),
  on(userActions.getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
  })),
  on(userActions.getRoleList, (state, action) => ({
    ...state,
  })),
  on(userActions.getRolesSuccess, (state, action) => ({
    ...state,
    roles: action.roles,
  }))
);

export function userReducer(
  state: UserManagement | undefined,
  action: Action
): UserManagement {
  return reducer(state, action);
}

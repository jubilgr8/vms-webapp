import { User } from 'libs/api/src';
import { createReducer, Action, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface Auth {
  loggedIn: boolean;
  isTokenValid: boolean;
  user: User;
  status: Status;
}

export interface AuthState {
  readonly [authFeatureKey]: Auth;
}

export enum Status {
  INIT = 'INIT',
  IN_PROGRESS = 'IN_PROGRESS',
}

export const authInitialState: Auth = {
  loggedIn: false,
  isTokenValid: false,
  status: Status.INIT,
  user: {
    token: '',
    username: '',
  },
};

const reducer = createReducer(
  authInitialState,
  on(AuthActions.getUserSuccess, (state, action) => ({
    ...state,
    loggedIn: true,
    isTokenValid: action.isValid,
  })),
  on(AuthActions.getUserFail, (state, action) => ({
    ...authInitialState,
  })),
  on(AuthActions.login, AuthActions.register, (state, _) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(
    AuthActions.registerSuccess,
    AuthActions.loginSuccess,
    (state, action) => ({
      ...state,
      loggedIn: true,
      status: Status.INIT,
      user: action.user,
    })
  ),
  on(AuthActions.registerFail, AuthActions.loginFail, (state, _) => ({
    ...state,
    status: Status.INIT,
  })),
  on(AuthActions.logout, (state, action) => ({
    ...authInitialState,
  }))
);

export function authReducer(state: Auth | undefined, action: Action): Auth {
  return reducer(state, action);
}

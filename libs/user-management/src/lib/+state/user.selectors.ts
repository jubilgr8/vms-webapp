import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserManagement } from './user.interfaces';
import { userFeatureKey } from './user.reducer';

export const getUserManagement = createFeatureSelector<UserManagement>(
  userFeatureKey
);
export const getUsers = createSelector(
  getUserManagement,
  (userManagement: UserManagement) => userManagement.users
);
export const getRoles = createSelector(
  getUserManagement,
  (userManagement: UserManagement) => userManagement.roles
);

export const usersQuery = {
  getUserManagement,
  getUsers,
  getRoles,
};

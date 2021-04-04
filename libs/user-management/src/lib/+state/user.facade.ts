import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './user.reducer';
import { usersQuery } from './user.selectors';
import * as userActions from './user.actions';
import { UserMaster } from './user.interfaces';

@Injectable()
export class UserFacade {
  constructor(private store: Store<UserState>) {}
  isLoading$ = this.store.select(usersQuery.isLoading);

  users$ = this.store.select(usersQuery.getUsers);
  roles$ = this.store.select(usersQuery.getRoles);
  menus$ = this.store.select(usersQuery.getMenus);
  getUserList() {
    this.store.dispatch(userActions.getUserList());
  }
  getRoleList() {
    this.store.dispatch(userActions.getRoleList());
  }
  getMenuList() {
    this.store.dispatch(userActions.getMenuList());
  }
  submitNewUser() {
    this.store.dispatch(userActions.submitUser());
  }
  updateUser() {
    debugger;
    this.store.dispatch(userActions.updateUser());
  }
  submitNewRole() {
    this.store.dispatch(userActions.submitRole());
  }
  deleteUser(user: UserMaster) {
    this.store.dispatch(userActions.deleteUser({user}));
  }
}

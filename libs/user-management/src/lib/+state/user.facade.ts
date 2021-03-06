import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './user.reducer';
import { usersQuery } from './user.selectors';
import * as userActions from './user.actions';

@Injectable()
export class UserFacade {
  constructor(private store: Store<UserState>) {}
  users$ = this.store.select(usersQuery.getUsers);
  roles$ = this.store.select(usersQuery.getRoles);
  getUserList() {
    this.store.dispatch(userActions.getUserList());
  }
  getRoleList() {
    this.store.dispatch(userActions.getRoleList());
  }
  submitNewUser() {
    this.store.dispatch(userActions.submitUser());
  }
}

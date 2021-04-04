import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './admin.reducer';
import { usersQuery } from './admin.selectors';
import * as adminActions from './admin.action';

@Injectable()
export class AdminFacade {
  constructor(private store: Store<UserState>) {}
  zones$ = this.store.select(usersQuery.getZones);
  zonecoords$ = this.store.select(usersQuery.getZoneCoords);
  menus$ = this.store.select(usersQuery.getMenus);
  vmss$ = this.store.select(usersQuery.getVms);
  getZoneList() {
    this.store.dispatch(adminActions.getZoneList());
  }

  getVmsList() {
    this.store.dispatch(adminActions.getVmsList());
  }
  // getRoleList() {
  //   this.store.dispatch(adminActions.getRoleList());
  // }
  // getMenuList() {
  //   this.store.dispatch(adminActions.getMenuList());
  // }
  // submitNewUser() {
  //   this.store.dispatch(adminActions.submitUser());
  // }
  // submitNewRole() {
  //   this.store.dispatch(adminActions.submitRole());
  // }
}

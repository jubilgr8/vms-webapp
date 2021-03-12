import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as adminActions from './admin.action';
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { AdminService } from '../admin.service';
import { NgrxFormsFacade } from '@vms/ngrx-forms';
import { of } from 'rxjs';
import * as fromNgrxForms from 'libs/ngrx-forms/src';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private ngrxFormsFacade: NgrxFormsFacade
  ) {}

  getUserList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.getZoneList),
      switchMap((item) => {
        return this.adminService
          .getZones()
          .pipe(map((data) => adminActions.getZoneSuccess({ zones: data })));
      })
    )
  );

  getVmsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.getVmsList),
      switchMap((item) => {
        return this.adminService
          .getVms()
          .pipe(map((data) => adminActions.getVmsSuccess({ vmss: data })));
      })
    )
  );
  // getRoleList$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(adminActions.getRoleList),
  //     switchMap((item) => {
  //       return this.userService
  //         .getRoles()
  //         .pipe(map((data) => adminActions.getRolesSuccess({ roles: data })));
  //     })
  //   )
  // );

//   getMenuList$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(adminActions.getMenuList),
//     switchMap((item) => {
//       return this.userService
//         .getMenuMaster()
//         .pipe(map((data) => adminActions.getMenuSuccess({ menus: data })));
//     })
//   )
// );

//   submitNewUser$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(adminActions.submitUser),
//       withLatestFrom(this.ngrxFormsFacade.data$),
//       exhaustMap(([action, data]) =>
//         this.userService.submitUser(data).pipe(
//           map((response) => {
//             return adminActions.submitUserSuccess({ paylod: response });
//           }),
//           catchError((result) =>
//             of(fromNgrxForms.setErrors({ errors: result.error.errors }))
//           )
//         )
//       )
//     )
//   );

//   submitNewRole$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(adminActions.submitRole),
//       withLatestFrom(this.ngrxFormsFacade.data$),
//       exhaustMap(([action, data]) =>
//         this.userService.submitRole(data).pipe(
//           map((response) => {
//             debugger
//             return adminActions.submitRoleSuccess({ paylod: response });
//           }),
//           catchError((result) =>
//             of(fromNgrxForms.setErrors({ errors: result.error.errors }))
//           )
//         )
//       )
//     )
//   );
  // submitNewRole$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(userActions.submitUser),
  //     withLatestFrom(this.ngrxFormsFacade.data$),
  //     exhaustMap(([action, data]) =>
  //       this.userService.submitUser(data).pipe(
  //         map((response) => {
  //           return userActions.submitUserSuccess({ paylod: response });
  //         }),
  //         catchError((result) =>
  //           of(fromNgrxForms.setErrors({ errors: result.error.errors }))
  //         )
  //       )
  //     )
  //   )
  // );
}

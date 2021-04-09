import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as userActions from './user.actions';
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { UserService } from '../user.service';
import { NgrxFormsFacade } from '@vms/ngrx-forms';
import { of } from 'rxjs';
import * as fromNgrxForms from 'libs/ngrx-forms/src';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private ngrxFormsFacade: NgrxFormsFacade,
    private toastr: ToastrService,
    private router: Router
  ) {}

  getUserList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUserList),
      switchMap((item) => {
        return this.userService
          .getUsers()
          .pipe(map((data) => userActions.getUsersSuccess({ users: data })));
      })
    )
  );
  getRoleList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getRoleList),
      switchMap((item) => {
        return this.userService
          .getRoles()
          .pipe(map((data) => userActions.getRolesSuccess({ roles: data })));
      })
    )
  );
  getRoleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getRoleById),
      switchMap((item) => {
        return this.userService
          .getRoleById(item.roleId)
          .pipe(map((data) => userActions.getRoleByIdSuccess({ role: data })));
      })
    )
  );

  getMenuList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getMenuList),
      switchMap((item) => {
        return this.userService
          .getMenuMaster()
          .pipe(map((data) => userActions.getMenuSuccess({ menus: data })));
      })
    )
  );

  submitNewUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.submitUser),
      withLatestFrom(this.ngrxFormsFacade.data$),
      exhaustMap(([action, data]) =>
        this.userService.submitUser(data).pipe(
          map((response) => {
            this.toastr.success('User Created Successfully!');
            this.router.navigateByUrl('/user-management/users');
            return userActions.submitUserSuccess({ paylod: response });
          }),
          catchError((result) => {
            this.toastr.error('Something went wrong. Please try again!');
            return of(fromNgrxForms.setErrors({ errors: result.error.errors }));
          })
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.updateUser),
      withLatestFrom(this.ngrxFormsFacade.data$),
      exhaustMap(([action, data]) =>
        this.userService.updateUser(data).pipe(
          map((response) => {
            this.toastr.success('User Updated Successfully!');
            this.router.navigateByUrl('/user-management/users');
            return userActions.updateUserSuccess({ paylod: response });
          }),
          catchError((result) => {
            this.toastr.error('Something went wrong. Please try again!');
            return of(
              fromNgrxForms.setErrors({
                errors: result.error.errors,
              })
            );
          })
        )
      )
    )
  );

  submitNewRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.submitRole),
      withLatestFrom(this.ngrxFormsFacade.data$),
      exhaustMap(([action, data]) =>
        this.userService.submitRole(data).pipe(
          map((response) => {
            this.toastr.success('Role Created Successfully!');
            //this.router.navigateByUrl('/user-management/roles');
            return userActions.submitRoleSuccess({ paylod: response });
          }),
          catchError((result) => {
            this.toastr.error('Something went wrong. Please try again!');

            return of(fromNgrxForms.setErrors({ errors: result.error.errors }));
          })
        )
      )
    )
  );
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

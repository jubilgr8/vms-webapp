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
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private ngrxFormsFacade: NgrxFormsFacade,
    private toastr: ToastrService
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

  getZoneById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.getZoneById),
      switchMap((item) => {
        return this.adminService
          .getZoneById(item.zoneId)
          .pipe(
            map((data) => adminActions.getZoneByIdSuccess({ paylod: data }))
          );
      })
    )
  );

  submitNewZone$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(adminActions.submitZone),
      withLatestFrom(this.ngrxFormsFacade.data$),
      exhaustMap(([action, data]) =>
        this.adminService.submitZone(data).pipe(
          map((response) => {
            debugger;
            this.toastr.success('Zone Created Successfully!');
            return adminActions.submitZoneSuccess({ paylod: response });
          }),
          catchError((result) =>
            of(fromNgrxForms.setErrors({ errors: result.error.errors }))
          )
        )
      )
    );
  });
}

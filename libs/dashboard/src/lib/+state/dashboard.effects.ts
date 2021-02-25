import { DashboardService } from '../dashboard.service';
import { NgrxFormsFacade, setErrors } from 'libs/ngrx-forms/src';
import * as fromNgrxForms from 'libs/ngrx-forms/src';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import * as DashboardActions from './dashboard.actions';
// import { LocalStorageJwtService } from '../local-storage-jwt.service';

@Injectable()
export class DashboardEffects {
  
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.getFilters),
      switchMap(item =>
        this.dashboardService.getFilters().pipe(
          map(data => DashboardActions.getFilterSuccess({ filters: data })),
          catchError(error => of(DashboardActions.getFilterFail(error))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as mediaActions from './media.action';
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { MediaService } from '../media.service';
import { NgrxFormsFacade } from '@vms/ngrx-forms';
import { of } from 'rxjs';
import * as fromNgrxForms from 'libs/ngrx-forms/src';

@Injectable()
export class MediaEffects {
  constructor(
    private actions$: Actions,
    private mediaService: MediaService,
    private ngrxFormsFacade: NgrxFormsFacade
  ) {}

  getMediaList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mediaActions.getMediaList),
      switchMap((item) => {
        return this.mediaService
          .getMedias()
          .pipe(map((data) => mediaActions.getMediaSuccess({ Medias: data })));
      })
    )
  );

//   getVmsList$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(adminActions.getVmsList),
//       switchMap((item) => {
//         return this.adminService
//           .getVms()
//           .pipe(map((data) => adminActions.getVmsSuccess({ vmss: data })));
//       })
//     )
//   );
  }
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './media.reducer';
import { usersQuery } from './media.selectors';
import * as mediaActions from './media.action';

@Injectable()
export class MediaFacade {
  constructor(private store: Store<UserState>) {}
  medias$ = this.store.select(usersQuery.getMedias);
  getMediaList() {
    this.store.dispatch(mediaActions.getMediaList());
  }
}
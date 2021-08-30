import { MediaManagement, MediaMaster } from './media.interfaces';
import * as mediaaction from './media.action';
import { Action, createReducer, on } from '@ngrx/store';
import { MediaManagementModule } from '../media-management.module';

export const mediaFeatureKey = 'mediaForms';
export interface UserState {
  readonly [mediaFeatureKey]: MediaManagement;
}

export const mediaInitialState: MediaManagement = {
  medias: null,
  newPlaylist: null,
  errors: {},
};

const reducer = createReducer(
  mediaInitialState,
  on(mediaaction.getMediaList, (state, action) => ({
    ...state,
  })),
  on(mediaaction.getMediaSuccess, (state, action) => ({
    ...state,
    medias: action.Medias,
  })),
  on(mediaaction.getNewPlaylistCreated, (state, action) => ({
    ...state,
    newPlaylist: action.playlist,
  }))
);
export function mediaReducer(
  state: MediaManagement | undefined,
  action: Action
): MediaManagement {
  return reducer(state, action);
}

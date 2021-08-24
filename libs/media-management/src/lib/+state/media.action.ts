import { MediaMaster } from './media.interfaces';
import { props, createAction } from '@ngrx/store';

// Zone Details -------------
export const getMediaList = createAction('[Media] GET_MEDIA_LIST');

export const getMediaSuccess = createAction(
  '[Media] MEDIA_LIST_LOADED',
  props<{ Medias: MediaMaster[] }>()
);

export const getMediaFail = createAction(
  '[Media] MEDIA_FAIL',
  props<{ error: Error }>()
);
export const getNewPlaylist = createAction(
  '[Media] NEW_PLAYLIST',
  props<{ playlist: any }>()
);
export const getNewPlaylistCreated = createAction(
  '[Media] NEW_PLAYLIST_Created',
  props<{ playlist: any }>()
);

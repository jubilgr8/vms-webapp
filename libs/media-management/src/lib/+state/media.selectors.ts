import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MediaManagement } from './media.interfaces';
import { mediaFeatureKey } from './media.reducer';

export const getMediaManagement = createFeatureSelector<MediaManagement>(
  mediaFeatureKey
);
export const getMedias = createSelector(
  getMediaManagement,
  (mediaMngmnt: MediaManagement) => mediaMngmnt.medias
);
export const getNewPlaylist = createSelector(
  getMediaManagement,
  (mediaMngmnt: MediaManagement) => mediaMngmnt.newPlaylist
);

export const usersQuery = {
  getMediaManagement,
  getMedias,
  getNewPlaylist,
};

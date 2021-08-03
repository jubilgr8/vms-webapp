import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { TokenInterceptorService } from 'libs/auth/src/lib/token-interceptor.service';
import {
  AuthGuardService,
  AuthModule,
  LocalStorageJwtService,
} from '@vms/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgrxFormsModule } from '@vms/ngrx-forms';
import {
  mediaFeatureKey,
  mediaInitialState,
  mediaReducer,
} from './+state/media.reducer';
import { MediaEffects } from './+state/media.effects';
import { EffectsModule } from '@ngrx/effects';
import { MediaFacade } from './+state/media.facade';
import { MediaService } from './media.service';
// import { AddNewUserComponent } from './add-new-user/add-new-user.component';
// import { RoleListComponent } from './role-list/role-list.component';
// import { AddNewRoleComponent } from './role-list/add-new-role/add-new-role.component';
import { CheckboxComponent } from 'libs/ngrx-forms/src/lib/fields/checkbox/checkbox.component';
import { MediaUploadComponent } from './media-upload/media-upload.component';
import { AddNewMediaComponent } from './add-new-media/add-new-media.component';
import { PlaylistMstComponent } from './playlist-mst/playlist-mst.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { MediaListComponent } from './media-list/media-list.component';

@NgModule({imports: [
  AuthModule,
  CommonModule,
  NgrxFormsModule,
  RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: MediaUploadComponent,
      // canActivateChild: [AuthGuardService],
      // resolve: { DashboardService },
    },
    {
      path: 'media-upload/:id',
      pathMatch: 'full',
      component: MediaUploadComponent,
      // canActivateChild: [AuthGuardService],
      // resolve: { DashboardService },
    },
    {
      path: 'add-medias',
      pathMatch: 'full',
      component: AddNewMediaComponent,
      // canActivateChild: [AuthGuardService],
      // resolve: { DashboardService },
    },
    {
      path: 'playlist',
      pathMatch: 'full',
      component: PlaylistMstComponent,
      // canActivateChild: [AuthGuardService],
      // resolve: { DashboardService },
    },
    {
      path: 'playlist-create',
      pathMatch: 'full',
      component: CreatePlaylistComponent,
      // canActivateChild: [AuthGuardService],
      // resolve: { DashboardService },
    }
  ]),
  StoreModule.forFeature(mediaFeatureKey, mediaReducer, {
    initialState: mediaInitialState,
  }),
  EffectsModule.forFeature([MediaEffects]),
],
providers: [
  MediaEffects,
  MediaService,
  MediaFacade,
  TokenInterceptorService,
  LocalStorageJwtService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
],declarations: [
  MediaUploadComponent,
  AddNewMediaComponent,
  PlaylistMstComponent,
  CreatePlaylistComponent,
  MediaListComponent
],})
export class MediaManagementModule {}

import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
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
import { ColorPickerModule } from 'ngx-color-picker';
import { MatDialogModule } from '@angular/material/dialog';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaAuditComponent } from './media-audit/media-audit.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViewMediaComponent } from './view-media/view-media.component';
import { DeleteMediaComponent } from './delete-media/delete-media.component';
import { AddBlocksComponent } from './add-blocks/add-blocks.component';
import { ResizableDraggableComponent } from './add-blocks/resizable-draggable/resizable-draggable.component';
import { BlockMediaComponent } from './block-media/block-media.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddEffectsComponent } from './add-effects/add-effects.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TarrifMasterComponent } from './tarrif-master/tarrif-master.component';
import { PartyMasterComponent } from './party-master/party-master.component';
import { PublishDashboardComponent } from './publish-dashboard/publish-dashboard.component';
import { AddNewPartyComponent } from './add-new-party/add-new-party.component';
import { AddNewPublishComponent } from './add-new-publish/add-new-publish.component';
import { AddPublishTimeComponent } from './add-publish-time/add-publish-time.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { AddNewTarrifComponent } from './tarrif-master/add-new-tarrif/add-new-tarrif.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    NgrxFormsModule,
    ColorPickerModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    ColorSketchModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    MatInputModule,
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
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'add-medias',
        pathMatch: 'full',
        component: AddNewMediaComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'playlist',
        pathMatch: 'full',
        component: PlaylistMstComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'playlist-create',
        pathMatch: 'full',
        component: CreatePlaylistComponent,
       canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'media-audit',
        pathMatch: 'full',
        component: MediaAuditComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'add-effects',
        pathMatch: 'full',
        component: AddEffectsComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'add-blocks',
        pathMatch: 'full',
        component: AddBlocksComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'block-media',
        pathMatch: 'full',
        component: BlockMediaComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'party-master',
        pathMatch: 'full',
        component: PartyMasterComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'publish-dashboard',
        pathMatch: 'full',
        component: PublishDashboardComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'tarrif-master',
        pathMatch: 'full',
        component: TarrifMasterComponent,
        canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
    ]),
    StoreModule.forFeature(mediaFeatureKey, mediaReducer, {
      initialState: mediaInitialState,
    }),
    EffectsModule.forFeature([MediaEffects]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    DragDropModule,
  ],
  providers: [
    MediaEffects,
    MediaService,
    MediaFacade,
    EventService,
    TokenInterceptorService,
    EventService,
    LocalStorageJwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  declarations: [
    MediaUploadComponent,
    AddNewMediaComponent,
    PlaylistMstComponent,
    CreatePlaylistComponent,
    MediaListComponent,
    MediaAuditComponent,
    ViewMediaComponent,
    DeleteMediaComponent,
    AddBlocksComponent,
    ResizableDraggableComponent,
    BlockMediaComponent,
    AddEffectsComponent,
    TarrifMasterComponent,
    PartyMasterComponent,
    AddNewPartyComponent,
    PublishDashboardComponent,
    AddNewPublishComponent,
    AddNewTarrifComponent,
    ImageViewerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [DpDatePickerModule],
})
export class MediaManagementModule {}

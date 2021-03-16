import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenInterceptorService } from 'libs/auth/src/lib/token-interceptor.service';
import {
  AuthGuardService,
  AuthModule,
  LocalStorageJwtService,
} from '@vms/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgrxFormsModule } from '@vms/ngrx-forms';
// import {
//   userFeatureKey,
//   userInitialState,
//   userReducer,
// } from './+state/user.reducer';
// import { UserEffects } from './+state/user.effects';
// import { UserFacade } from './+state/user.facade';
// import { UserService } from './user.service';
// import { AddNewUserComponent } from './add-new-user/add-new-user.component';
// import { RoleListComponent } from './role-list/role-list.component';
// import { AddNewRoleComponent } from './role-list/add-new-role/add-new-role.component';
import { CheckboxComponent } from 'libs/ngrx-forms/src/lib/fields/checkbox/checkbox.component';
import { MediaUploadComponent } from './media-upload/media-upload.component';

@NgModule({imports: [
    AuthModule,
  //NgrxFormsModule,
  //CommonModule,
  RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: MediaUploadComponent,
      // canActivateChild: [AuthGuardService],
      // resolve: { DashboardService },
    }
  ])
//   StoreModule.forFeature(userFeatureKey, userReducer, {
//     initialState: userInitialState,
//   }),
//   EffectsModule.forFeature([UserEffects]),
// ],
// providers: [
//   UserEffects,
//   UserService,
//   UserFacade,
//   TokenInterceptorService,
//   LocalStorageJwtService,
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: TokenInterceptorService,
//     multi: true,
//   },
// ],

// })
],declarations: [
  MediaUploadComponent
],})
export class MediaManagementModule {}

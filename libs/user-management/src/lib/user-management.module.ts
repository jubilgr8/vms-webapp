import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import {
//   dashboardFeatureKey,
//   dashboardInitialState,
//   dashboardReducer,
// } from './+state/dashboard.reducer';
// import { DashboardEffects } from './+state/dashboard.effects';
// import { DashboardService } from './dashboard.service';
// import { DashboardFacade } from './+state/dashboard.facade';
import { TokenInterceptorService } from 'libs/auth/src/lib/token-interceptor.service';
import {
  AuthGuardService,
  AuthModule,
  LocalStorageJwtService,
} from '@vms/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgrxFormsModule } from '@vms/ngrx-forms';
import {
  userFeatureKey,
  userInitialState,
  userReducer,
} from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import { UserService } from './user.service';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  imports: [
    AuthModule,
    NgrxFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'users',
        pathMatch: 'full',
        component: UserManagementComponent,
        // canActivateChild: [AuthGuardService],
        // resolve: { DashboardService },
      },
      {
        path: 'add-new-user',
        pathMatch: 'full',
        component: AddNewUserComponent,
        // resolve: { DashboardService },
      },
      {
        path: 'roles',
        pathMatch: 'full',
        component: RoleListComponent,
        // resolve: { DashboardService },
      },
    ]),
    StoreModule.forFeature(userFeatureKey, userReducer, {
      initialState: userInitialState,
    }),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UserEffects,
    UserService,
    UserFacade,
    TokenInterceptorService,
    LocalStorageJwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  declarations: [
    UserManagementComponent,
    AddNewUserComponent,
    RoleListComponent,
  ],
})
export class UserManagementModule {}

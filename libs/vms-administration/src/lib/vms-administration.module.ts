import { TokenInterceptorService } from 'libs/auth/src/lib/token-interceptor.service';
import {
  AuthGuardService,
  AuthModule,
  LocalStorageJwtService,
} from '@vms/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgrxFormsModule } from '@vms/ngrx-forms';
import {
  adminFeatureKey,
  adminInitialState,
  adminReducer,
} from './+state/admin.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './+state/admin.effects';
import { AdminFacade } from './+state/admin.facade';
import { AdminService } from './admin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule } from '@angular/router';
import { ZoneAccessComponent } from './zoneaccess/zoneaccess.component';
import { VmsMasterComponent } from './vms-master/vms-master.component';
import { AddNewZoneComponent } from './add-new-zone/add-new-zone.component';
import { AddVmsComponent } from './add-vms/add-vms.component';
import { VmsComponent } from './vms/vms.component';
import { AddNewVmsComponent } from './add-new-vms/add-new-vms.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ToastrModule } from 'ngx-toastr';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';

@NgModule({
  imports: [
    AuthModule,
    ToastrModule.forRoot(),
    CommonModule,
    NgxSliderModule,
    NgrxFormsModule,
    RouterModule.forChild([
      {
        path: 'zone',
        pathMatch: 'full',
        component: ZoneComponent,
        //canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
      {
        path: 'set-zone-access',
        pathMatch: 'full',
        component: ZoneAccessComponent,
        //canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
      {
        path: 'vms-master',
        pathMatch: 'full',
        component: VmsMasterComponent,
        // canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
      {
        path: 'add-new-zone',
        pathMatch: 'full',
        component: AddNewZoneComponent,
        // canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
      {
        path: 'vms',
        pathMatch: 'full',
        component: VmsComponent,
        // canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
      {
        path: 'add-new-vms',
        pathMatch: 'full',
        component: AddNewVmsComponent,
        // canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
    ]),
    StoreModule.forFeature(adminFeatureKey, adminReducer, {
      initialState: adminInitialState,
    }),
    EffectsModule.forFeature([AdminEffects]),
  ],

  providers: [
    AdminEffects,
    AdminService,
    AdminFacade,
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
    ZoneComponent,
    ZoneAccessComponent,
    VmsMasterComponent,
    AddNewZoneComponent,
    AddVmsComponent,
    VmsComponent,
    AddNewVmsComponent,
  ],
})
export class VmsAdministrationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  dashboardFeatureKey,
  dashboardInitialState,
  dashboardReducer,
} from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';
import { DashboardService } from './dashboard.service';
import { DashboardFacade } from './+state/dashboard.facade';
import { TokenInterceptorService } from 'libs/auth/src/lib/token-interceptor.service';
import { AuthModule, LocalStorageJwtService } from '@vms/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { ListViewComponent } from './list-view/list-view.component';
import { from } from 'rxjs';
import { NgrxFormsModule } from '@vms/ngrx-forms';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    NgrxFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
        // resolve: { DashboardService },
      },
    ]),
    StoreModule.forFeature(dashboardFeatureKey, dashboardReducer, {
      initialState: dashboardInitialState,
    }),
    EffectsModule.forFeature([DashboardEffects]),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCu14V2upQfY6LTGiHVHhV0EifFi3pgvGY',
    }),
  ],
  providers: [
    DashboardEffects,
    DashboardService,
    DashboardFacade,
    TokenInterceptorService,
    LocalStorageJwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  declarations: [DashboardComponent, GoogleMapComponent, ListViewComponent],
})
export class DashboardModule {}

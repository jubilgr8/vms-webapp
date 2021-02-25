import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardFeatureKey, dashboardInitialState, dashboardReducer } from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';
import { DashboardService } from './dashboard.service';
import { DashboardFacade } from './+state/dashboard.facade';
import { TokenInterceptorService } from 'libs/auth/src/lib/token-interceptor.service';
import { LocalStorageJwtService } from '@vms/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
        resolve: { DashboardService },
      }
    ]),
    StoreModule.forFeature(dashboardFeatureKey, dashboardReducer, {
      initialState: dashboardInitialState,
    }),
    EffectsModule.forFeature([DashboardEffects]),
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
  declarations: [DashboardComponent],
})
export class DashboardModule {}

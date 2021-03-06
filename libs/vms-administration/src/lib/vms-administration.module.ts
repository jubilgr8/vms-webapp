import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule } from '@angular/router';
import { ZoneAccessComponent } from './zoneaccess/zoneaccess.component';
import { AuthGuardService, AuthModule } from '@vms/auth';
@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '/zone',
        pathMatch: 'full',
        component: ZoneComponent,
        canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
      {
        path: '/set-zone-access',
        pathMatch: 'full',
        component: ZoneAccessComponent,
        canActivate: [AuthGuardService],
        // resolve: { HomeResolverService },
      },
    ]),
  ],
  declarations: [ZoneComponent, ZoneAccessComponent],
})
export class VmsAdministrationModule {}

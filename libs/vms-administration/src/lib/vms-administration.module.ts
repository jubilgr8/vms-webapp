import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule } from '@angular/router';
import { ZoneAccessComponent } from './zoneaccess/zoneaccess.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '/zone',
        pathMatch: 'full',
        component: ZoneComponent,
        // resolve: { HomeResolverService },
      },
      {
        path: '/set-zone-access',
        pathMatch: 'full',
        component: ZoneAccessComponent,
        // resolve: { HomeResolverService },
      },
    ]),
  ],
  declarations: [ZoneComponent, ZoneAccessComponent],
})
export class VmsAdministrationModule {}

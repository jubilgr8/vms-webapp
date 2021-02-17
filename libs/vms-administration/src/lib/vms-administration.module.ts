import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import {RouterModule} from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ZoneComponent,
        // resolve: { HomeResolverService },
      },
    ]),
  ],
  declarations: [ZoneComponent],
})
export class VmsAdministrationModule {}

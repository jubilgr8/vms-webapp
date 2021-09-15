import { ApiModule } from '@vms/api';
import { AuthGuardService, AuthModule } from '@vms/auth';
import { NgrxErrorModule } from '@vms/ngrx-error';
import { NgrxRouterModule } from '@vms/ngrx-router';
import { NgrxFormsModule } from '@vms/ngrx-forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ColorSketchModule } from 'ngx-color/sketch';
@NgModule({
  imports: [
    ApiModule,DateTimePickerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AuthModule,
    BrowserModule,ColorSketchModule,
    NgxSliderModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@vms/dashboard').then((m) => m.DashboardModule),
          canActivate: [AuthGuardService],
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('@vms/dashboard').then((m) => m.DashboardModule),
          canActivate: [AuthGuardService],
        },
        {
          path: 'vms-admin',
          loadChildren: () =>
            import('@vms/vms-administration').then(
              (m) => m.VmsAdministrationModule
            ),
          canActivate: [AuthGuardService],
        },
        {
          path: 'user-management',
          loadChildren: () =>
            import('@vms/user-management').then((m) => m.UserManagementModule),
           canActivate: [AuthGuardService],
        },
        {
          path: 'media-management',
          loadChildren: () =>
            import('@vms/media-management').then(
              (m) => m.MediaManagementModule
            ),
          canActivate: [AuthGuardService],
        },
        // {
        //   path: 'article/:slug',
        //   loadChildren: () =>
        //     import('@vms/article/src/lib/article.module').then(
        //       (m) => m.ArticleModule,
        //     ),
        // },
        // {
        //   path: 'settings',
        //   loadChildren: () =>
        //     import('@vms/settings/src/lib/settings.module').then(
        //       (m) => m.SettingsModule,
        //     ),
        // },
        // {
        //   path: 'editor',
        //   loadChildren: () =>
        //     import('@vms/editor/src/lib/editor.module').then((m) => m.EditorModule),
        // },
        // {
        //   path: 'profile/:username',
        //   loadChildren: () =>
        //     import('@vms/profile/src/lib/profile.module').then(
        //       (m) => m.ProfileModule,
        //     ),
        // },
      ],
      {
        initialNavigation: 'enabled',
        useHash: true,
        relativeLinkResolution: 'legacy',
      }
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgrxRouterModule,
    NgrxErrorModule,
    NgrxFormsModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  // exports: [NavbarComponent],
  // bootstrap: [AppComponent,NavbarComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  ],
  exports:[DateTimePickerModule]
})
export class AppModule {}

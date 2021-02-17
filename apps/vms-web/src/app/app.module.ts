import { ApiModule } from '@vms/api';
import { AuthGuardService, AuthModule } from '@vms/auth';
import { NgrxErrorModule } from '@vms/ngrx-error';
import { NgrxRouterModule } from '@vms/ngrx-router';
import { NgrxFormsModule } from '@vms/ngrx-forms'
import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [
    ApiModule,
    AuthModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'vms-admin',
          loadChildren: () =>
            import('@vms/vms-administration').then((m) => m.VmsAdministrationModule),
          canActivate: [AuthGuardService]
        },
        {
          path: 'vms-admin/zone',
          loadChildren: () =>
            import('@vms/vms-administration').then((m) => m.VmsAdministrationModule),
          canActivate: [AuthGuardService]
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
      },
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgrxRouterModule,
    NgrxErrorModule,
    NgrxFormsModule
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
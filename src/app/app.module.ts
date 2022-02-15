import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AboutComponent } from './home/components/about/about.component';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './home/components/main-menu/main-menu.component';
import { PageNotFoundComponent } from './home/components/page-not-found/page-not-found.component';
import { SiteWrapperComponent } from './home/components/site-wrapper/site-wrapper.component';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LibraInMemoryDb } from 'src/test-data/libra-in-memory-db';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    SiteWrapperComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LibraInMemoryDb),
    RouterModule.forRoot([
      {
        path: '',
        component: SiteWrapperComponent,
        children: [
          // Lazy-loaded routes
          {
            path: 'diary',
            loadChildren: () => import('./diary/diary.module').then(m => m.DiaryModule),
          },
          // Component routes
          { path: 'welcome', component: WelcomeComponent },     
          // Fallback route (if empty)
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: '**', component: PageNotFoundComponent },
        ],
      },
    ]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Libra Store Dev Tools',
      maxAge: 25,
      logOnly: environment.production }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

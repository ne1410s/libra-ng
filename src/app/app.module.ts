import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LibraInMemoryDb } from 'src/test-data/libra-in-memory-db';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LibraInMemoryDb),
    RouterModule.forRoot([
      // Lazy-loaded routes
      {
        path: 'diary',
        loadChildren: () => import('./diary/diary.module').then(m => m.DiaryModule),
      },
      // Component routes
      { path: 'welcome', component: WelcomeComponent },     
      // Fallback route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
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

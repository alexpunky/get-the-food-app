import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {CodeComponent} from './components/code/code.component';
import {FormsModule} from '@angular/forms';
import {Location} from '@angular/common';
import {AppStateService} from './services/app-state.service';
import {CookieService} from 'ngx-cookie-service';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'code', component: CodeComponent},
        {path: 'final', component: FinalComponent},
      ],
      {enableTracing: false, useHash: true} // <-- debugging purposes only
    )
  ],
  providers: [Location, AppStateService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

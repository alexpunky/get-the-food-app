import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {CodeComponent} from './components/code/code.component';
import {QrCodeComponent} from './components/qr-code/qr-code.component';
import {FormsModule} from '@angular/forms';
import {Location} from '@angular/common';
import {AppStateService} from './services/app-state.service';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'code', component: CodeComponent},
        {path: 'qr-code', component: QrCodeComponent},
      ],
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [Location, AppStateService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {State} from '../../models/state';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private interval;
  public error;

  constructor(private appState: AppStateService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      const cookie = this.cookieService.get('usb');
      this.cookieService.delete('usb');
      if (cookie) {
        if (cookie === 'success') {
          this.appState.changeState(State.CODE);
          this.router.navigateByUrl('code');
          clearInterval(this.interval);
        } else if (cookie === 'error') {
          // Show message
          this.showErrorMessage();
        }
      }
    }, 1500);
  }

  setCookie() {
    this.cookieService.set('testcookie', 'OUIOUI 123');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private showErrorMessage() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

}

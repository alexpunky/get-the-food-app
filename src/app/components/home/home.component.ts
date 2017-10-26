import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {State} from '../../models/state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private interval;

  constructor(private appState: AppStateService, private router: Router) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      const cookie = document.cookie;
      if (cookie) {
        if (cookie.indexOf('success') !== -1) {
          this.appState.changeState(State.CODE);
          this.router.navigateByUrl('code');
          clearInterval(this.interval);
        } else {
          // Show message
        }
      }
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private interval;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      const code = localStorage.getItem("code");
      localStorage.clear();
      if(code) {
        alert(code);
      }
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  static readonly CODE = '2214';

  public message = '';
  public typeMessage = '';

  public keys = [
    { label: '7', callback: () => { this.write('7'); } },
    { label: '8', callback: () => { this.write('8'); } },
    { label: '9', callback: () => { this.write('9'); } },

    { label: '4', callback: () => { this.write('4'); } },
    { label: '5', callback: () => { this.write('5'); } },
    { label: '6', callback: () => { this.write('6'); } },

    { label: '1', callback: () => { this.write('1'); } },
    { label: '2', callback: () => { this.write('2'); } },
    { label: '3', callback: () => { this.write('3'); } },

    { label: '*', callback: () => { this.write('*') } },
    { label: '0', callback: () => { this.write('0'); } },
    { label: '#', callback: () => { this.write('#'); } },
  ];

  public code = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public write(value): void {
    if (this.code.length < 4) {
      this.code += value;

      if (this.code.length === 4) {
        setTimeout(() => {
          this.validate();
        }, 100);
      }
    }
  }

  private validate(): void {
    if (this.code === CodeComponent.CODE) {
      this.success();
    }
    else {
      this.failure();
    }
  }

  private success(): void {
    this.message = 'Accès autorisé';
    this.typeMessage = 'success';
    setTimeout(() => {
      //this.router.navigate(['/qr-code']);
      this.typeMessage = '';
    }, 3000);
  }

  private failure(): void {
    this.typeMessage = 'error';
    this.message = 'Code erroné';

    setTimeout(() => {
      this.typeMessage = '';
      this.code = '';
    }, 3000);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent {
  numero: any;
  primo: any;

  checkPrime() {
    if (this.numero < 2) {
      this.primo = false;
      return;
    }
    for (let i = 2; i < this.numero; i++) {
      if (this.numero % i === 0) {
        this.primo = false;
        return;
      }
    }
    this.primo = true;
  }
}


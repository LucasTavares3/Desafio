import { Component } from '@angular/core';

@Component({
  selector: 'app-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.css']
})
export class DivisorComponent {
  num1: any;
  num2: any;
  resultado: any;

  calcular() {
    let a = this.num1;
    let b = this.num2;
    if(a>b){
      while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
      }
      this.resultado = a;
    }
    else if (b>a){
      if(a>b){
        while (a !== 0) {
          let r = b % a;
          b = a;
          a = r;
        }
        this.resultado = b;
      }
    }
    }
}

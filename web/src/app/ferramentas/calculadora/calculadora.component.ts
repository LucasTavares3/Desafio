import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: any;
  num2: any;
  operacao: any;
  resultado: any;

  calcular() {
    switch (this.operacao) {
      case '+':
        this.resultado = (this.num1 + this.num2).toFixed(2);
        break;
      case '-':
        this.resultado = (this.num1 - this.num2).toFixed(2);
        break;
      case '*':
        this.resultado = (this.num1 * this.num2).toFixed(2);
        break;
      case '/':
        this.resultado = (this.num1 / this.num2).toFixed(2);
        break;
      default:
        this.resultado = null;
    }
}
}

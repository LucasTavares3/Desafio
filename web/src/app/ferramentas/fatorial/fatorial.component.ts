import { Component } from '@angular/core';

@Component({
  selector: 'app-fatorial',
  templateUrl: './fatorial.component.html',
  styleUrls: ['./fatorial.component.css']
})
export class FatorialComponent {
  numero: any;
  resultado: number | null = null;

  calcularFatorial() {
    let resultado = 1;
    for (let i = 1; i <= this.numero; i++) {
      resultado *= i;
    }
    this.resultado = resultado;
  }
}

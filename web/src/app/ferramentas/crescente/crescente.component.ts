import { Component } from '@angular/core';

@Component({
  selector: 'app-crescente',
  templateUrl: './crescente.component.html',
  styleUrls: ['./crescente.component.css']
})
export class CrescenteComponent {
  numero: any;
  resultado: string | null = null;

  verificarSequencia() {
    const numeroString = this.numero.toString();

    let crescente = true;
    for (let i = 0; i < numeroString.length - 1; i++) {
      if (numeroString[i] > numeroString[i + 1]) {
        crescente = false;
        break;
      }
    }

    if (crescente) {
      this.resultado = `A sequência de números de ${this.numero} é crescente.`;
    } else {
      this.resultado = `A sequência de números de ${this.numero} não é crescente.`;
    }
  }
}

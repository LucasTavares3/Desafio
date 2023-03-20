import { Component } from '@angular/core';

const g = 9.81;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})

export class LancamentoComponent {
  velocidadeInicial: any;
  alturaMaxima: any;
  tempo: any;

  calcularAltura() {
    this.alturaMaxima = (Math.pow(this.velocidadeInicial, 2) / (2 * g)).toFixed(2);
  }

  calcularTempo() {
    this.tempo = (this.velocidadeInicial/g).toFixed(2);
  }
}

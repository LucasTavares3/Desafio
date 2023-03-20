import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent {
  numero: any;
  resultado: any;

  somar() {
    let soma = 0;
    const numeroSup = this.numero.toString();
    for (let i = 0; i < numeroSup.length; i++) {
      soma += parseInt(numeroSup.charAt(i));
    }
    this.resultado = soma;
  }
}

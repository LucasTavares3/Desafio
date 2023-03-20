import { Component } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})

export class TabuadaComponent {
  numero: any;
  inicio: any;
  fim: any;
  tabuada: number[] = [];

  gerarTabuada() {
    this.tabuada = [];

    for (let i = this.inicio; i <= this.fim; i++) {
      this.tabuada.push(this.numero * i);
    }
  }

}


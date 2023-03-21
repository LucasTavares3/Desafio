import { Component } from '@angular/core';

@Component({
  selector: 'app-troca',
  templateUrl: './troca.component.html',
  styleUrls: ['./troca.component.css']
})


export class TrocaComponent {
  valor1: any;
  valor2: any;

  trocarValores(): void {
    const temp = this.valor1;
    this.valor1 = this.valor2;
    this.valor2 = temp;
  }

  resetarValores(): void {
    this.valor1 = null;
    this.valor2 = null;
  }

  alternarValores(): void {
    if (this.valor1 && this.valor2) {
      this.trocarValores();
    } else {
      this.resetarValores();
    }
  }
}

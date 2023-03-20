import { Component } from '@angular/core';

@Component({
  selector: 'app-cacaletras',
  templateUrl: './cacaletras.component.html',
  styleUrls: ['./cacaletras.component.css']
})
export class CacaletrasComponent {
  frase: any;
  letra: any;
  quantidade: any;

  contar() {
    this.quantidade = 0;
    const fraseSup = this.frase.toLowerCase();
    const letraSup = this.letra.toLowerCase();
    for (let i = 0; i < this.frase.length; i++) {
      if (fraseSup.charAt(i) === letraSup) {
        this.quantidade++;
      }
    }
  }
}

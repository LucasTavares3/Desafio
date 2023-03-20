import { Component } from '@angular/core';

@Component({
  selector: 'app-binario',
  templateUrl: './binario.component.html',
  styleUrls: ['./binario.component.css']
})
export class BinarioComponent {
  numero: any;
  binario: any;

  toBinary() {
    let decimal = this.numero;
    let binary = '';

    if (decimal === 0) {
      binary = '0';
    } else {
      while (decimal > 0) {
        binary = (decimal % 2).toString() + binary;
        decimal = Math.floor(decimal / 2);
      }
    }

    this.binario = binary;
  }
}


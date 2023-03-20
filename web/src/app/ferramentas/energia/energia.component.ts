import { Component } from '@angular/core';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.css']
})
export class EnergiaComponent {
  kwhConsumidos: any;
  valorKwh: any;
  consumo: any;

  calcularConsumo(){
    if (this.kwhConsumidos > 100 && this.kwhConsumidos <200) {
      this.consumo = (this.kwhConsumidos * this.valorKwh) + ((this.kwhConsumidos * this.valorKwh)/4);
    } else if (this.kwhConsumidos >= 200) {
      this.consumo = (this.kwhConsumidos * this.valorKwh) + ((this.kwhConsumidos * this.valorKwh)/2);
    } else {
      this.consumo = this.kwhConsumidos * this.valorKwh
    }
  }
}

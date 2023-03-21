import { Component} from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  conta: number = 0;

  increment(): void{
    this.conta ++;
  }

  decrement(): void{
    this.conta -= this.conta ? 1: 0;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  count: number = 0;

  constructor(){}

  ngOnInit(): void {
  }

  increment(): void{
    this.count ++;
  }

  decrement(): void{
    this.count -= this.count ? 1: 0;
  }
}

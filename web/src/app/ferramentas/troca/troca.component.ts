import { Component, OnInit } from '@angular/core';

export interface InputTroca {
  id: number;
  valor: string;
}

@Component({
  selector: 'app-troca',
  templateUrl: './troca.component.html',
  styleUrls: ['./troca.component.css']
})


export class TrocaComponent implements OnInit {
  inputs: InputTroca[] = [
    { id: 1, valor: 'Valor 1' },
    { id: 2, valor: 'Valor 2' }
  ];

  trocarInputs(input1: InputTroca, input2: InputTroca) {
    const valorTemp = input1.valor;
    input1.valor = input2.valor;
    input2.valor = valorTemp;
  }

  ngOnInit(): void {

  }
}

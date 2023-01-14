import { Component } from '@angular/core';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'calculadora',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent {
  constructor(private readonly calculadora: CalculadoraService) {}

  displayValue: string = '';

  valoresDosBotoes: string[] = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '*',
    'CE',
    '0',
    '/',
    '='
  ];

  sendDataToSerivce(event: string) {
    if (event === 'CE') {
      this.displayValue = '';
    } else if (event === '=') {
      this.calcular();
    } else this.displayValue += event;
  }
  calcular() {
    let aux: string = this.calculadora.calcular(this.displayValue);

    this.displayValue = aux;
  }
}

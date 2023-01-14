import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'tela-calculadora',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent {
  @Input() display: string = "0";
}

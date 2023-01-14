import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'botao-calculadora',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input() valor: string = "default";
  @Output() emitter = new EventEmitter();

  onClick(){
    this.emitter.emit(this.valor);
  }

}

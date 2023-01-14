import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  calcular(val: string) : string {
    return eval(val);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sunday',
  imports: [CommonModule],
  templateUrl: './sunday.html',
  styleUrl: './sunday.css'
})
export class Sunday {
  lista : string[] = ['1','2','3','4','5','a','b','c'];
  listaInversa : string[] = [];
  isOn : boolean = true;
  exibirListaInvertida () : void {
    for(let i = this.lista.length; i != 0; i--){
      this.listaInversa.push(this.lista[i])
    }
    this.isOn = !this.isOn;
  }
}

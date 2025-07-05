import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos {
  show : boolean = true;
  showMessage () : void {
    this.show = !this.show; // toggle  
  }

  listaFrutas : string[] = [];


  showFruits () : void {
    let lista : string[] = ["maça", "banana", "pineapple"];
    lista.forEach(fruit => {
      this.listaFrutas.push(fruit);
    });
    
  }
  isAtivo : boolean = false;
  liquid : string = "Água";
  waterWine(): void {
  this.isAtivo = !this.isAtivo;
  this.liquid = this.isAtivo ? "Vinho" : "Água";
}
  
}

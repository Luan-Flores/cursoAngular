import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {
  name : string = "Luan";
  age : number = 19;
  job : string = "Desenvolvedor";
  hobbies = ["Run", "Code", "Gym", 'Swimming']
  car = {
    name: "Polo",
    year: "1998"
  }
}   

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.css'
})
export class ParentData {
  @Input() name : string = ""; //dado do componente filho 
  // pode iniciar dado VAZIO ^^
  // ou colocar o "!" no nome
  @Input() dataInfo! : {email : string, role : string};
  @Input() userAbout : string = "";
  @Input() hardSkill! : {languages : string[], frameworks : string[], tools : string[]};
   
  constructor () {};
}

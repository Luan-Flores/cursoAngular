import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first-component/first-component";
import { ParentData } from "./components/parent-data/parent-data";
import { Directives } from "./components/directives/directives";
import { IfRender } from "./components/if-render/if-render";
import { Eventos } from './components/eventos/eventos';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, ParentData, Directives, IfRender, Eventos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Curso-_Angular";
  userName : string = "Rodolfo";
  userData = {
    email : "rodolfo123@email.com",
    role : "Admin"
  };
  userAbout : string = "Confident and great learner";
  hardSkill = {
    languages : ["TypeScript", "PHP", "C#"],
    frameworks : ["Angular"],
    tools: ["Git/GitHub"]
  };
}

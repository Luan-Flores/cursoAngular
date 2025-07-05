import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives implements OnInit {
  font = "Poppins";
  size = 20;
  color = 'brown';
  classes = ['small-title', 'green-title', 'underline']

  ngOnInit(): void {}
}

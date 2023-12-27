import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {
  nome:string = "Ana"

  // construtor
  constructor() {}

  // inicializador
  ngOnInit() {
    
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {
  
  // URL base
  url = "http://localhost/api/php/";

  // vetor de cursos
  vetor:Curso[] = [];

  // construtor
  constructor(private http:HttpClient) {}

  // inicializador
  ngOnInit() {
    
  }

  // cadastrar
  cadastrar():void {
    alert("cadastrar");
  } 

  // selecionar
  selecionar():void {
    alert("selecionar");
  }

  // alterar
  alterar():void {
    alert("alterar");
  }

  // remover
  remover():void {
    alert("remover");
  }

}

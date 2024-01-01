import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  // vetor de cursos
  vetor: Curso[] = [];

  // objeto da classe Curso
  curso = new Curso();

  // construtor
  constructor(private cursoService: CursoService) {}

  // inicializador
  ngOnInit() {
    // ao inicializar o sistema, deverá listar os cursos
    this.selecionar();
  }

  // cadastrar
  cadastrar() {
    this.cursoService.cadastrarCurso(this.curso).subscribe(

      (res: Curso[]) => {
        this.vetor = res;

        // limpar atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        // atualizar a listagem
        this.selecionar();
        
      }
    )
  } 

  // selecionar
  selecionar() {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
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

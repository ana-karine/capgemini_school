import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import { EMPTY } from 'rxjs';

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

  // selecionar
  selecionar() {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  // cadastrar
  cadastrar() {
    this.cursoService.cadastrarCurso(this.curso).subscribe(

      (res: Curso[]) => {
        this.vetor = res;

        // limpar atributos
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        // atualizar a listagem
        this.selecionar();
        
      }
    )
  } 

  // remover
  remover() {
    this.cursoService.removerCurso(this.curso).subscribe(

      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        // atualizar listagem
        this.selecionar();
      }
    )
  }

  // selecionar curso específico
  selecionarCurso(c: Curso) {
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

  // alterar
  alterar() {
    this.cursoService.atualizarCurso(this.curso).subscribe(
      
      (res: Curso[]) => {

        // atualizar vetor
        this.vetor = res;

        // limpar os valores do objeto
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
      }
    )
  }

}

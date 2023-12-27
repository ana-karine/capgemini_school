import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // URL
  url = "http://localhost/api/php/";

  // vetor
  vetor!: Curso[];

  // construtor
  constructor(private http: HttpClient) { }

  // obter todos os cursos
  obterCursos(): Observable<Curso[]>{
    return this.http.get<{ cursos: Curso[] }>(this.url+"listar").pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  // cadastrar curso
  cadastrarCurso(c: Curso): Observable<Curso[]>{
    return this.http.post<{ cursos: Curso[] }>(this.url+"cadastrar", {cursos:c}).pipe(
      map((res) => {
        this.vetor.push(...res.cursos);
        return this.vetor;
      })
    )
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
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
  vetor: Curso[] = [];

  // construtor
  constructor(private http: HttpClient) { }

  // obter todos os cursos
  obterCursos(): Observable<Curso[]>{
    return this.http.get<{ cursos: Curso[] }>(this.url + "listar").pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  // cadastrar curso
  cadastrarCurso(c: Curso): Observable<Curso[]>{
    return this.http.post<{ cursos: Curso }>(this.url + "cadastrar", { cursos:c }).pipe(
      map((res) => {     
        this.vetor.push(res.cursos);
        return this.vetor;
      })
    )
  }

  // remover curso
  removerCurso(c: Curso): Observable<Curso[]>{
    const params = new HttpParams().set("idCurso", c.idCurso!.toString());
    console.log("params: "+params);

    return this.http.delete(this.url + "excluir", { params: params }).pipe(
      map((res) => {   
        console.log("RES: "+res);
        const filtro = this.vetor.filter((curso) => {
          return +curso['idCurso']! !== +c.idCurso!;
        })  
        
        return this.vetor = filtro;
      })
    )
  }

  // atualizar curso
  atualizarCurso(c: Curso): Observable<Curso[]> {
    // executa a alteração via URL
    return this.http.put<{ cursos: Curso }>(this.url + "alterar", { cursos:c }).pipe(
      // percorre o vetor para saber qual é o id do curso alterado
      map((res) => {
        console.log(res);
        const cursoAlterado = this.vetor.find((item) => {
          return +item['idCurso']! === +c.idCurso!;
        });
        
        // altera o valor do vetor local
        if (cursoAlterado) {
          cursoAlterado['nomeCurso'] = c['nomeCurso'];
          cursoAlterado['valorCurso'] = c['valorCurso'];
        }
        
        // retorno
        return this.vetor;
      })
    );
  }
}

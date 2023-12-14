import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  //standalone: true,
  //imports: [],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})

export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date(); // propriedade da classe que armazena um objeto 'Date'
  timer: any = null!; // propriedade que inicialmente é atribuída a 'null!'

  @Input() texto = "";

  // 'ngOnInit': método do ciclo de vida do Angular que é chamado depois que as propriedades 
  // vinculadas de um componente são inicializadas.
  ngOnInit(): void {
    console.log("O evento OnInit disparou.");
    // 'setInterval': função do JavaScript que executa uma função ou uma expressão em intervalos 
    // regulares especificados em milissegundos. Neste caso, a função de seta passada para 
    // 'setInterval' atualiza a propriedade 'horario' com uma nova instância de 'Date' a cada segundo
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  // 'ngOnChanges': método do ciclo de vida do Angular que é chamado sempre que há alterações 
  // nas propriedades de entrada ('@Input') de um componente.
  // 'changes': objeto do tipo 'SimpleChanges' que contém informações sobre as alterações nas 
  // propriedades de entrada. Cada propriedade de 'changes' representa uma propriedade de entrada 
  // do componente, e seu valor é um objeto com as propriedades 'previousValue' e 'currentValue'.
  ngOnChanges(changes: SimpleChanges): void {
    console.log("O evento OnChanges disparou.");
    console.log(changes);
  }

  // 'ngOnDestroy': método do ciclo de vida do Angular que é chamado antes que o componente seja 
  // destruído. Ele fornece a oportunidade de limpar recursos ou realizar tarefas antes que o 
  // componente seja removido.
  ngOnDestroy(): void {
    console.log("O evento OnDestroy disparou.");
    clearInterval(this.timer);
  }

}

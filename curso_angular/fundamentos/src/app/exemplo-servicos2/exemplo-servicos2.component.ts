import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  //standalone: true,
  //imports: [],
  templateUrl: './exemplo-servicos2.component.html',
  styleUrl: './exemplo-servicos2.component.css'
})

export class ExemploServicos2Component {
  descricao = "";

  constructor(public logger : LoggerService) {};

  adicionarDescricao() {
    //console.log(`A descrição "${this.descricao}" foi adicionada`);
    this.logger.logar(`A descrição "${this.descricao}" foi adicionada`);
  }
}

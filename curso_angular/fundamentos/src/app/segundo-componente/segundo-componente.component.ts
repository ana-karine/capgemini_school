import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})

export class SegundoComponenteComponent {
  nome = "Ana";
  dataNascimento = "1981-01-15";
  urlImagem = "/assets/avatar.png"

  mostrarDataNascimento() {
    alert(`A data de nascimento do João é: ${this.dataNascimento}`)
  }
}

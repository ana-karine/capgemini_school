import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  //standalone: true,
  //imports: [],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})

export class ComponentePaiComponent {
  sobrenomePai = "da Silva"
}

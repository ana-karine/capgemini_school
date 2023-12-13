import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  //standalone: true,
  //imports: [],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})

export class ComponenteFilhoComponent {
  nomeFilho = "";
  @Input() sobrenomeFilho = ""
}

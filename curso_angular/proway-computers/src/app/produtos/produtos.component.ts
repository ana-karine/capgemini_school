import { Component } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] = produtos;
}

import { Component } from '@angular/core';
import { FuncoesService } from './funcoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: FuncoesService) { }
}

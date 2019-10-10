import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {
  usuarios = null
  constructor(private service: FuncoesService) { }

  ngOnInit() {
    this.service.lista().subscribe(
      lista => this.usuarios = lista['usuario']
    );
  }

}

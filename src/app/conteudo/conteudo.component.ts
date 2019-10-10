import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor(private service: FuncoesService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-exercicio-com-pontuacao',
  templateUrl: './exercicio-com-pontuacao.component.html',
  styleUrls: ['./exercicio-com-pontuacao.component.css']
})
export class ExercicioComPontuacaoComponent implements OnInit {

  constructor(private service: FuncoesService) { }

  ngOnInit() {
  }

}

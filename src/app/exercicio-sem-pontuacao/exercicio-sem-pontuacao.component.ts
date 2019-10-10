import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-exercicio-sem-pontuacao',
  templateUrl: './exercicio-sem-pontuacao.component.html',
  styleUrls: ['./exercicio-sem-pontuacao.component.css']
})
export class ExercicioSemPontuacaoComponent implements OnInit {

  constructor(private service: FuncoesService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private service: FuncoesService) { }

  ngOnInit() {
  }

}

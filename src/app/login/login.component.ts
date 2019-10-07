import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios = null;
  constructor(private service: FuncoesService) { }

  ngOnInit() {
    this.service.lista().subscribe(
      lista => this.usuarios = lista['usuario']
    );
  }

}

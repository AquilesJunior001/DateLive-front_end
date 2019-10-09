import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios = null;
  usuario = ''
  senha = ''

  constructor(private service: FuncoesService) { }

  ngOnInit() {
    this.service.lista().subscribe(
      lista => this.usuarios = lista['usuario']
    );
  }

  fazerlogin(){
    this.service.fazerlogin(this.usuarios,this.usuario,this.senha)
    this.usuario = ''
    this.senha = ''
  }

}

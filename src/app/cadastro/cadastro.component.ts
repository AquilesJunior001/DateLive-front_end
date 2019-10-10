import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuarios = null;
  usuario = ''
  senha = ''
  confirmaSenha = ''
  mensagem = ''

  constructor(private service: FuncoesService) { }

  ngOnInit() {
    this.service.lista().subscribe(
      lista => this.usuarios = lista['usuario']
    );
  }

  cadastrar() {
    if (this.senha == this.confirmaSenha) {
      this.service.cadastrar(this.usuarios,this.usuario,this.senha)
      this.usuario = ''
      this.senha = ''
      this.confirmaSenha = ''
      if (this.service.cadastrado == true) {
        this.mensagem = 'Usuario ja cadastrado!'
      }
    } else {
      this.mensagem = 'Senha não são Iguais'
    }
  }

}

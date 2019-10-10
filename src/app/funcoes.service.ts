import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  constructor(private http: HttpClient, private router: Router) { }
  URL = 'http://127.0.0.1:5000/select';
  URLpost = 'http://127.0.0.1:5000/insert/'
  mostrar = false
  login = false
  cadastrado = false
  usuario = {'id': 0,'nome':'usuario','senha':'usuario','pontuacao':0,'tipo':'anonimo'}

  lista() {
    return this.http.get(this.URL);
  }

  fazerlogin(usuarios, nome, senha) {
    for (let usuario of usuarios) {
      if (usuario.nome == nome) {
        if (usuario.senha == senha) {
          this.usuario = usuario
          console.log(this.usuario)
          this.router.navigate(['/inicial'])
          this.mostrar = true
          this.login = true
        }
      }
    }

  }

  cadastrar(usuarios, nome, senha){
    for (let usuario of usuarios) {
      if (usuario.nome == nome) {
        this.cadastrado = true
      }
    }
    if (this.cadastrado == false) {
      
    }
  }

}

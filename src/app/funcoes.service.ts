import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  constructor(private http: HttpClient, private router: Router) { }
  URL = 'http://127.0.0.1:5000/select';
  URLpost = 'http://127.0.0.1:5000/insert/';
  URLupdate = 'http://127.0.0.1:5000/update/';
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
      let aux = this.URLpost+nome+'/'+senha
      this.http.post(aux,200)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
        this.router.navigate(['/'])
    }
  }

  incrementar(id,pontos){
    let aux = this.URLupdate+id+'/'+pontos
    this.http.put(aux,200)
    .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  pontuacao(dados){
    return dados.sort(function(a, b){return b.pontuacao-a.pontuacao})
  }

  sair(){
    this.usuario = {'id': 0,'nome':'usuario','senha':'usuario','pontuacao':0,'tipo':'anonimo'}
    this.mostrar = false
    this.login = false
    this.router.navigate(['/'])
  }

}

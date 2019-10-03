import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ExemploComponent } from './exemplo/exemplo.component';
import { ExercicioSemPontuacaoComponent } from './exercicio-sem-pontuacao/exercicio-sem-pontuacao.component';
import { ExercicioComPontuacaoComponent } from './exercicio-com-pontuacao/exercicio-com-pontuacao.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { InicialComponent } from './inicial/inicial.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ConteudoComponent,
    ExemploComponent,
    ExercicioSemPontuacaoComponent,
    ExercicioComPontuacaoComponent,
    EstatisticaComponent,
    InicialComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

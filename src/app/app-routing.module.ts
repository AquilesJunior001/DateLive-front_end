import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ExemploComponent } from './exemplo/exemplo.component';
import { ExercicioSemPontuacaoComponent } from './exercicio-sem-pontuacao/exercicio-sem-pontuacao.component';
import { ExercicioComPontuacaoComponent } from './exercicio-com-pontuacao/exercicio-com-pontuacao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastrar', component: CadastroComponent},
  {path: 'inicial', component: InicialComponent},
  {path: 'conteudos', component: ConteudoComponent},
  {path: 'exemplos', component: ExemploComponent},
  {path: 'exercicios', component: ExercicioSemPontuacaoComponent},
  {path: 'exerciciosP', component: ExercicioComPontuacaoComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'estatisticas', component: EstatisticaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

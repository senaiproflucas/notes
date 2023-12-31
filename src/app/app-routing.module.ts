import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { NotaComponent } from './componentes/nota/nota.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'criar-nota',
    component: CriarNotaComponent
  },
  {
    path: 'nota',
    component: NotaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'excluir-nota/:id',
    component: ExcluirNotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

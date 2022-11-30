import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'',component: CompLoginComponent},
  {path:'noticias',component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

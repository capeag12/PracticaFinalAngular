import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { ComprobarLoginGuard } from './comprobar-login.guard';
import { DetallesNoticiaComponent } from './detalles-noticia/detalles-noticia.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoticiaExisteGuard } from './noticia-existe.guard';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'',component: CompLoginComponent},
  {path:'noticias',component:NoticiasComponent, canActivate:[ComprobarLoginGuard]},
  {path:'detallesNoticia/:id',component:DetallesNoticiaComponent, canActivate:[NoticiaExisteGuard ]},
  {path:'notFound',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

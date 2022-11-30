import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { BtnOverDirective } from './btn-over.directive';
import { NoticiasComponent } from './noticias/noticias.component';
import { AddNoticiasComponent } from './add-noticias/add-noticias.component';
import { ConvertirMayusPipe } from './convertir-mayus.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompLoginComponent,
    BtnOverDirective,
    NoticiasComponent,
    AddNoticiasComponent,
    ConvertirMayusPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

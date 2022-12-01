import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DAOApp } from '../daoapp.service';
import { Noticia } from '../noticia';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'comp-add-noticias',
  templateUrl: './add-noticias.component.html',
  styleUrls: ['./add-noticias.component.css']
})
export class AddNoticiasComponent implements OnInit {

  formAdd!:FormGroup
  cTitulo!:FormControl
  cContenido!:FormControl

  observableModo!:Observable<boolean>
  constructor(private servicio:Servicio, private dao:DAOApp) { }

  ngOnInit(): void {
    this.cTitulo = new FormControl('',[Validators.required,Validators.minLength(6) ,Validators.maxLength(70)])
    this.cContenido = new FormControl('',[Validators.required, Validators.minLength(6)])

    this.formAdd = new FormGroup({
      titulo:this.cTitulo,
      contenido:this.cContenido
    })

    this.observableModo = this.servicio.getOscuroObservable()
  }

  addNoticia(){
    let titulo = this.formAdd.controls['titulo'].value
    let content = this.formAdd.controls['contenido'].value
    let newNoticia = new Noticia(titulo, content);
    this.dao.añadirNoticia(newNoticia)
    this.formAdd.reset()
  }

}

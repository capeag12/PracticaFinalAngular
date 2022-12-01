import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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

  constructor(private servicio:Servicio, private dao:DAOApp) { }

  ngOnInit(): void {
    this.cTitulo = new FormControl('',[Validators.required, Validators.maxLength(70)])
    this.cContenido = new FormControl('',[Validators.required])

    this.formAdd = new FormGroup({
      titulo:this.cTitulo,
      contenido:this.cContenido
    })
  }

  addNoticia(){
    let titulo = this.formAdd.controls['titulo'].value
    let content = this.formAdd.controls['contenido'].value
    console.log(titulo)
    console.log(content)
    let newNoticia = new Noticia(titulo, content);
    this.dao.añadirNoticia(newNoticia)
  }

}

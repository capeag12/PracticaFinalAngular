import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DAOApp } from '../daoapp.service';
import { Noticia } from '../noticia';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'app-detalles-noticia',
  templateUrl: './detalles-noticia.component.html',
  styleUrls: ['./detalles-noticia.component.css']
})
export class DetallesNoticiaComponent implements OnInit {

  noticia!:Noticia
  idNoticia!:number
  modo!:boolean
  constructor(private servicio:Servicio,private dao:DAOApp ,private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.idNoticia= params['id'])
  }

  ngOnInit(): void {
    console.log(this.idNoticia)
    this.noticia = this.dao.obtenerNoticia(this.idNoticia)
    this.servicio.getOscuroObservable().subscribe(bool => this.modo=bool)
    
  }

}

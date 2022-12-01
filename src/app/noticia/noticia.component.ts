import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DAOApp } from '../daoapp.service';
import { Noticia } from '../noticia';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'comp-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  @Input() indice!:number;
  noticia!:Noticia

  modo = false
  constructor(private servicio:Servicio, private dao:DAOApp) { }

  ngOnInit(): void {
    this.noticia = this.dao.obtenerNoticia(this.indice);
    this.servicio.getOscuroObservable().subscribe(cosa => this.modo=cosa)
  }

  eliminarNoticia(){
    this.dao.eliminarNoticia(this.indice)
  }

}

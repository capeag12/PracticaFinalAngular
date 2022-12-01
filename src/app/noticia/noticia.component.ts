import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private servicio:Servicio, private dao:DAOApp) { }

  ngOnInit(): void {
    this.noticia = this.dao.obtenerNoticia(this.indice);
  }

}

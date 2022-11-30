import { Component, OnInit } from '@angular/core';
import { DAOApp } from '../daoapp.service';
import { Noticia } from '../noticia';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  listaNoticias:Noticia[] = this.dao.getListaNoticas()
  constructor(private dao:DAOApp, private servicio:Servicio) { 
      dao.getNoticiasObservable().subscribe(recuperada =>this.listaNoticias=recuperada)
  }
  
  ngOnInit(): void {
  }

}

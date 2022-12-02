import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'app-detalles-noticia',
  templateUrl: './detalles-noticia.component.html',
  styleUrls: ['./detalles-noticia.component.css']
})
export class DetallesNoticiaComponent implements OnInit {

  constructor(private servicio:Servicio, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => console.log(params))
  }

  ngOnInit(): void {
  }

}

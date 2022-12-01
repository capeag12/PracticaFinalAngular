import { Component, OnInit } from '@angular/core';
import { DAOApp } from '../daoapp.service';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modoOscuro:boolean = false
  constructor(private servicio:Servicio, private dao:DAOApp) { }

  ngOnInit(): void {
    this.servicio.getOscuroObservable().subscribe(modo=>this.modoOscuro=modo)
  }

  cambiarModo(){
    this.servicio.cambiarModo()
    console.log(this.modoOscuro)
  }

}

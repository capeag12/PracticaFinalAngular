import { Component, OnInit } from '@angular/core';
import { DAOApp } from '../daoapp.service';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'comp-add-noticias',
  templateUrl: './add-noticias.component.html',
  styleUrls: ['./add-noticias.component.css']
})
export class AddNoticiasComponent implements OnInit {

  

  constructor(private servicio:Servicio, private dao:DAOApp) { }

  ngOnInit(): void {
  }

}

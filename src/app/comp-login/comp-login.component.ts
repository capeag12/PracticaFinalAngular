import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DAOApp } from '../daoapp.service';
import { Servicio } from '../servicio.service';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css']
})
export class CompLoginComponent implements OnInit {

    modo:boolean = false

  formLogin!:FormGroup
  constructor(private dao:DAOApp, private servicio:Servicio, private router:Router) { }

  ngOnInit(): void {
    this.formLogin= new FormGroup({
      usuario: new FormControl("",[Validators.required]),
      contrasena:new FormControl("",[Validators.required,Validators.minLength(8)])
    })

    this.servicio.getOscuroObservable().subscribe(mode => this.modo=mode)
  }

  public iniciarSesion():void{
    let usu:string = this.formLogin.controls['usuario'].value
    let contra:string = this.formLogin.controls['contrasena'].value

    let u = this.dao.comprobarUsuarioContrasena(usu,contra);
    if (u.NombreUsuario=="") {
      alert("El usuario o la contrasena son incorrectos")
    } else{
      this.servicio.UsuarioConectado = u;
      this.router.navigate(['noticias'])

    }

    this.formLogin.reset()
  }

}

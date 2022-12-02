import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class Servicio {
  private usuarioConectado!:Usuario
  public modoOscuro:boolean = false;
  private modoOscuroSubject!:BehaviorSubject<boolean>;
  
  
  constructor() {
    this.modoOscuroSubject = new BehaviorSubject<boolean>(this.modoOscuro)
    
    this.modoOscuroSubject.next(this.modoOscuro)
   }

   public get UsuarioConectado() : Usuario {
    return this.usuarioConectado;
   }

   public getOscuroObservable(){
    return this.modoOscuroSubject.asObservable()
   }

   cambiarModo(){
    
      if (this.modoOscuro==true) {
          this.modoOscuro=false
      }
      else{
          this.modoOscuro=true
      }
      this.modoOscuroSubject.next(this.modoOscuro)
   }
   
   
  public set UsuarioConectado(v : Usuario) {
    this.usuarioConectado = v;
  }

  
  

  
  
   
   
}

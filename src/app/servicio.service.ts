import { Injectable} from '@angular/core';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class Servicio {
  private usuarioConectado!:Usuario
  private modoOscuro:boolean = false
  
  
  constructor() {
    
   }

   private cambiarModo(){
    if (this.modoOscuro==true) {
        this.modoOscuro=false
    }
    else{
        this.modoOscuro=true
    }
   }

   public get UsuarioConectado() : Usuario {
    return this.usuarioConectado;
   }
   
   
  public set UsuarioConectado(v : Usuario) {
    this.usuarioConectado = v;
  }

  
  public get ModoOscuro() : boolean {
    return this.modoOscuro
  }
  
   
   
}

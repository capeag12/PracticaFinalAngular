import { Injectable } from '@angular/core';
import { Noticia } from './noticia';
import { Usuario } from './usuario';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DAOApp {
  private listaNoticias:Noticia[]
  private listaUsuario:Usuario[]
  private listaNoticiasSubject:Subject<Noticia[]>
  private listaUsuarioSubject: Subject<Usuario[]>
  
  constructor() {
    this.listaNoticias=[];
    this.listaNoticias.push(new Noticia("Titulo noticia 1","Contenido noticia 1 Contenido noticia 1 Contenido noticia 1 Contenido noticia 1 Contenido noticia 1"))

    this.listaUsuario = []
    this.listaUsuario.push(new Usuario("usuario1","contrasenaUsuario1"))

    this.listaNoticiasSubject = new Subject();
    this.listaUsuarioSubject = new Subject();
  }

  public getListaNoticas(){
    return [...this.listaNoticias]
  }

  public añadirNoticia(noticia:Noticia){
    this.listaNoticias.push(noticia);
    this.listaNoticiasSubject.next([...this.listaNoticias]);
  }

  public eliminarNoticia(index:number){
    this.listaNoticias.splice(index,1);
    this.listaNoticiasSubject.next([...this.listaNoticias])
  }

  public obtenerNoticia(index:number):Noticia{
    return this.listaNoticias[index]
  }


  public getNoticiasObservable():Observable<Noticia[]>{
    return this.listaNoticiasSubject.asObservable();
  }

  public getUsuariosObservable():Observable<Usuario[]>{
    return this.listaUsuarioSubject.asObservable();
  }

  public comprobarIDNoticiaExiste(index:number){
    if (this.listaNoticias.length > index) {
      return true
    }
    else return false
  }

  public comprobarUsuarioContrasena(usuario:string, contra:string):Usuario{
    let encontrado:boolean = false
    let usu:Usuario = new Usuario("","");
    for (let i = 0; i < this.listaUsuario.length && encontrado==false; i++) {
      let u:Usuario = this.listaUsuario[i]

      if (u.NombreUsuario==usuario && u.Contrasena==contra) {
        usu = u;
      }
      
      
    }
    return usu;
  }
}

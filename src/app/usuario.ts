export class Usuario {
    private nombreUsuario:string;
    private contrasena:string;

    constructor(nombre:string, contra:string) {
        this.nombreUsuario=nombre;
        this.contrasena=contra;
    }

    
    public get NombreUsuario() : string {
        return this.nombreUsuario;
    }

    
    public get Contrasena() : string {
        return this.contrasena 
    }
    
    
}

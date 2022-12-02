export class Noticia {
    private titulo:string;
    private contenido:string;
    private fechaCreacion:Date;

    constructor(titulo:string, contenido:string) {
        this.titulo = titulo;
        this.contenido=contenido;
        this.fechaCreacion = new Date()
    }

    
    public get Titulo() : string {
        return this.titulo
    }
    
    
    public get Contenido() : string {
        return this.contenido
    }

    
    public get FechaCreacion() : Date {
        return this.fechaCreacion;
    }
    
    
    
    
}

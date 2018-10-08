export class ContactoUsuario {
    public nombre: string;
    public apellidos: string;
    public email: string;
    public mensaje: string;

    constructor(nombre: string, apellidos: string, email: string, mensaje: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.mensaje = mensaje;
    }

}
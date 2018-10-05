//clases
class Camiseta {
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;


   public constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public Mix():string {
        return this.color + " " + this.marca;
    };
}


var a = new Camiseta("rojo", "adidas", "Abc", "M", 15);
var b = a.Mix();
console.log(b);
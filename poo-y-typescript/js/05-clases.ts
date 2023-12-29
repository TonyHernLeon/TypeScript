/**
 * Clase (Molde del objeto)
 *  
 * Lo normal es llamar a la clase como el archivo, 
 * como en java
 */

/**
 * Exportaciones
 * 
 * export es para poder usarla la clase en otra clase, y sería así 
 * export class Camiseta{
 * }
 */

/**
 * Interface
 */

interface CamisetaBase{
    setColor(color);
    getColor();
}
class Camiseta implements CamisetaBase{ 

    //Propiedades (carcteristicas del objeto)
    // public nombre: tipado;
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Constructor
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Métodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

var camiseta = new Camiseta("Azul", "Playera", "Nike", "L", 19.95);

console.log(camiseta);
// Clase (Molde del objeto)
/**
 * Lo normal es llamar a la clase como el archivo, 
 * como en java
 */
class Camiseta{

    //Propiedades (carcteristicas del objeto)
    // public nombre: tipado;
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Métodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

var camiseta = new Camiseta();
camiseta.setColor("azul");

console.log(camiseta);
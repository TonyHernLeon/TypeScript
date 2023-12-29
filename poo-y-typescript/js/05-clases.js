// Clase (Molde del objeto)
/**
 * Lo normal es llamar a la clase como el archivo,
 * como en java
 */
var Camiseta = /** @class */ (function () {
    // Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Métodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("Azul", "Playera", "Nike", "L", 19.95);
console.log(camiseta);

// Clase (Molde del objeto)
/**
 * Lo normal es llamar a la clase como el archivo,
 * como en java
 */
var Camiseta = /** @class */ (function () {
    function Camiseta() {
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
var camiseta = new Camiseta();
camiseta.setColor("azul");
console.log(camiseta);

/**
 * Para poder usar una clase exportada
 * import {Camiseta} from './05-clases';
 */
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS Cargada!!");
        var camiseta = new Camiseta("Verde", "Futbol", "Puma", "M", 80.95);
        console.log(camiseta);
    }
    return Main;
}());
var main = new Main();

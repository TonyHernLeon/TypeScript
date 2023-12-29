/**
 * Para poder usar una clase exportada
 * import {Camiseta} from './05-clases';
 */

class Main {
    constructor(){
        console.log("Aplicacion JS Cargada!!");
        var camiseta = new Camiseta("Verde", "Futbol", "Puma", "M", 80.95);
        console.log(camiseta);
    }
}

var main = new Main();
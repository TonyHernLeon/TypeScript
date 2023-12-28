// Tipo de dato String
var cadena = "antoniohl91@gmail.com";
// Tipo de dato Number
var numero = 12;
// Tipo de dato booleano
var verdadero_falso = true;
// Tipo de dato comodín (cualquier valor)
var datoAny = "hola";
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var lenguajesAny = ["PHP", "JS", "CSS", 15];
var years = [12, 13, 14];
var yearsAny = ["DOCE", 13, 14];
// Multiple tipo de datos
var varMultiple = "Prueba Variable Multiple";
var varCustom;
varCustom = "Prueba";
varCustom = 12;
// let vs var
/*
 var -> nivel global
 let -> nivel bloque
 */
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, datoAny, lenguajes, lenguajesAny);

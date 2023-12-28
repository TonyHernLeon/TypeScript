// Tipo de dato String
let cadena: string = "antoniohl91@gmail.com";

// Tipo de dato Number
let numero: number = 12;

// Tipo de dato booleano
let verdadero_falso: boolean = true;

// Tipo de dato comodín (cualquier valor)
let datoAny: any = "hola";

// Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];
var lenguajesAny: Array<any> = ["PHP","JS","CSS", 15];

let years: number[] = [12, 13, 14];
let yearsAny: any[] = ["DOCE", 13, 14];

// Multiple tipo de datos
let varMultiple: string | number = "Prueba Variable Multiple";

// Variable personalizada (declaración y uso)
type varAlfaNum = string | number;
let varCustom: varAlfaNum;

varCustom = "Prueba";
varCustom = 12; 

// let vs var
/* 
 var -> nivel global
 let -> nivel bloque
 */

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    
    console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, datoAny, lenguajes, lenguajesAny);
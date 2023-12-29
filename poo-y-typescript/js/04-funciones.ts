// Funciones en TS
/**
 * function nombreMetodo (parametro: tipoVariable) :tipoVariableReturn
 * Si no se cumple esto, fallo de compilación 
 * 
 * @param numero 
 * @returns 
 */

function getNumero(numero: number):string{
    return "El numero es "+numero;
}

console.log(getNumero(55));
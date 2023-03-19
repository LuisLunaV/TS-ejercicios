"use strict";
/**
 * Crea una función que tome una matriz de números y devuelva la suma de todos los elementos.
 * Asegúrate de que TypeScript verifique que la entrada es una matriz de números y de que la función
 * devuelva un número.
 */
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumarElementos = (numeros) => {
    return numeros.reduce((acc, numero) => {
        return acc = acc + numero;
    }, 0);
};
const resp = sumarElementos(numberList);
console.log(resp);

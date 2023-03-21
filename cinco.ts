/**
 * Crea una función que tome dos matrices de números y devuelva una nueva matriz que contenga la suma de 
 * los elementos correspondientes en cada matriz. Asegúrate de que TypeScript verifique que las
 *  entradas son matrices de números y de que la función devuelva una matriz de números.
 */
const matrizUno: number[] = [1,3,5,7,9];
const matrizDos: number[] = [2,4,6,8,10];

const combinarMatrices =( ...matriz: number[][] ): number[] =>{
    
    const nuevaMatriz: number[] = [];

    matriz.forEach( valores =>{
       const matriz = valores.reduce((acc, value)=>{
        return acc = acc+value;
       },0);

       nuevaMatriz.push( matriz );
    });

    return nuevaMatriz;
}

const arreglo = combinarMatrices( matrizUno, matrizDos );
console.log(arreglo)
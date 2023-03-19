/**
 * Crea una interfaz para un objeto que tenga propiedades "nombre" y "edad". 
 * Luego, crea una función que tome un objeto que implemente esa interfaz y 
 * devuelva una cadena que contenga el nombre y la edad.
 */
interface Persona{
    nombre: string;
    edad: number;
}

let Usuario: Persona = {
    nombre:'Alfredo',
    edad:31
}

const datosDeUsuario = ( info:{ nombre:string, edad: number }): string =>{
    return `Nombre: ${info.nombre}\nEdad: ${ info.edad }`
};

const info = datosDeUsuario( Usuario );
console.log(info)
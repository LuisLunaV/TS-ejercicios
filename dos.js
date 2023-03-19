"use strict";
let Usuario = {
    nombre: 'Alfredo',
    edad: 31
};
const datosDeUsuario = (info) => {
    return `Nombre: ${info.nombre}\nEdad: ${info.edad}`;
};
const info = datosDeUsuario(Usuario);
console.log(info);

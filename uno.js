"use strict";
let User = {
    name: 'luis',
    lastName: 'luna',
    age: 31
};
const lengthObject = (objeto) => {
    return Object.keys(objeto).length;
};
console.log(lengthObject(User));
// La version aplicando el type en la funcion
// interface Person {
//     name: string;
//     lastName: string;
//     age: number;
//   }
//   const lengthObject = (obj: Person): number => {
//     return Object.keys(obj).length;
//   };
//   const user: Person = {
//     name: 'Luis',
//     lastName: 'Luna',
//     age: 31
//   };
//   console.log(lengthObject(user));

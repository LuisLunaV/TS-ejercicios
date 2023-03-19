// Crea una función que tome un objeto como argumento y devuelva su longitud. 
// Asegúrate de que TypeScript verifique que el objeto tenga una propiedad "length" y 
// de que la función devuelva un número.
type person = {
    name: string;
    lastName: string;
    age: number;
}

let User: person = {
    name: 'luis',
    lastName: 'luna',
    age: 31
}

const lengthObject =( objeto: object):number =>{
    return Object.keys(objeto).length;
};

console.log( lengthObject( User) );


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
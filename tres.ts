import { miNombre } from '../BASES/namespace/src/classes/Hero';
/**
 * Crea una clase para representar una mascota. La clase debería tener propiedades como 
 * "nombre", "tipo" y "edad". Asegúrate de que TypeScript compruebe que se ingresen los tipos de 
 * datos correctos y de que la clase tenga métodos para establecer y obtener los valores de estas 
 * propiedades.
 */

class Pet {
    constructor(
      public name: string,
      public type: string,
      public age: number
    ) {}
  
    get petInformation() {
      return `El nombre de la mascota es ${this.name}, su especie es ${this.type} y tiene una edad de ${this.age} años`;
    }
  }
  
  const pet: Pet = new Pet('Pirulais', 'Gato', 1);
  
  console.log(pet.petInformation);
/************************************************* */
// class Pet{
//     constructor(
//         public name:string,
//         public type: string,
//         public age: number
//     ){
//         this.name = name;
//         this.type = type;
//         this.age = age;
//     }
// private set createPet( information:Pet ){
// this.name = information.name;
// this.type = information.type;
// this.age = information.age;
// }

// get petInformation(){
//     return `El nombre de la mascota es ${this.name}, su especie es ${this.type} y tiene una edad de ${this.age} años`
// }

// }

// const pet: Pet = new Pet('pirulais', 'gato', 1  );

// console.log(pet.petInformation)
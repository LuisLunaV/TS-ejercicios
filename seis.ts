import { miNombre } from '../BASES/namespace/src/classes/Hero';
/**
 * Crea una clase para representar una cuenta bancaria. La clase debería tener propiedades como "nombre", 
 * "saldo" y "tipo de cuenta". Asegúrate de que TypeScript compruebe que se ingresen los tipos de 
 * datos correctos y de que la clase tenga métodos para establecer y obtener 
 * los valores de estas propiedades. También debería tener un método para agregar o retirar fondos.
 */
enum tipoDeCuenta {
    chequera = 'Chequera',
    ahorro   = 'Ahorro',
    nomina   = 'NOmina'
};

class Cuenta{
    constructor(
        private name: string,
        private saldo: number,
        private cuenta: tipoDeCuenta
    ){
        this.name   = name;
        this.saldo  = saldo;
        this.cuenta = cuenta;
    }

   public setName(name: string){
        this.name = name;
    }

    public getName(){
        return `Nombre del cliente: ${this.name}`;
    }

    public setSaldo( saldo: number ){
        this.saldo += saldo;
    }

    public getSaldo(){
        return `Saldo disponible: ${ this.saldo }`;
    }

    public setCuenta( tipo: tipoDeCuenta ){
        this.cuenta = tipo;
    }

    public getCuenta(){
        return `Tipo de cuenta: ${this.cuenta}`;
    }

    public retiros( cantidad: number ){

    }
}


const cuenta:Cuenta = new Cuenta('Luis',200, tipoDeCuenta.ahorro );
cuenta.setName( 'Alfredo' );
cuenta.setSaldo( 500 );

cuenta.setCuenta( tipoDeCuenta.ahorro );

console.log(cuenta.getName());
console.log(cuenta.getSaldo());
console.log(cuenta.getCuenta());


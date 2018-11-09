//Clase Autos
//fabrica
//modelo
//vin (numero de vehiculo)
//getDesc -> metodo para tener acceso a la clase
//
//desafio
// crear constructor para tomar nombre y edad, edad default->0
//getDesc devuelve "nombre tiene edad años"

class Persona {
    //constructor con syntax ES6 (ver arrow function)
    //puedo asignar un default en el argumento del constructor
    constructor(nombre = 'Anonimo', edad = 0) {
        this.nombre = nombre;        
        this.edad = edad;

    }
    //metodo de Persona
    getSaludo() {
        //return 'Hola, yo soy ' + this.nombre + '!';
    //template string en ES6 ->puedo inyectar codigo jsx con ${}
    return `Hola, ${this.nombre} quiere decirte algo:`

    }
    getDesc(){
        return `Soy ${this.nombre} y tengo ${this.edad} años...`
    }


}
//extend de la clase 
class Estudiante extends Persona {
     constructor(nombre, edad, titulo = ''){
        //super() se refiere a la clase padre para acceder al constructor 
        super(nombre, edad);
        this.titulo = titulo;
     }
     
     tieneTitulo() {
    //mediante !! fuerzo a devolver un valor booleano, ya que si es undefined o '' negando dos veces lo convierte en boleano. 
        return !!this.titulo;
     }
     //OVERRIDE SOBRE EL METODO PADRE
     getDesc(){
        //creo una variable para tener el texto padre
        let descripcion = super.getDesc();
        
            if(this.tieneTitulo()){
                descripcion+= ` Estoy graduado en ${this.titulo}.`
            }
        return descripcion;
    }
     
     
}

class Viajero extends Persona {
    constructor(nombre, edad, homeLoc=''){
        super(nombre, edad);
        this.homeLoc = homeLoc;
    }
    tieneHogar(){
        return !!this.homeLoc;
    }
    getSaludo() {
        let saludo = super.getSaludo();

        if(this.tieneHogar()){
            saludo+= ` Vengo viajando desde ${this.homeLoc}!!!`
        }
        else
            saludo+= ` No tengo hogar!!!`
        
        return saludo;
    }
}


const alumno1 = new Estudiante('Jorge', 16, 'Analista');
console.log(alumno1.getSaludo());
console.log(alumno1.getDesc());


const yo = new Persona('Daniel', 42);
console.log(yo.getSaludo());
console.log(yo.getDesc());

const otro = new Persona();
console.log(otro.getSaludo());
console.log(otro.getDesc());

const viajero1 = new Viajero('Sin hogar', 5, '');
const viajero2 = new Viajero('Trotamundo',52, 'Auckland');
console.log(viajero1.getSaludo());
console.log(viajero2.getSaludo());


//desafio
//clase viajante extiende persona
//sumar homelocation
//override getSaludo 
//1. Hola soy nombre. Estoy viniendo desde homelocation
//2. Hola soy nombre. 
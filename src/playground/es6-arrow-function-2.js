// arguments object - no longer bound with arrow functions

/* const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
 */  

//EJEMPLO ES5:

//   const user = {
//     name: 'Andrew',
//     cities: ['Philadelphia', 'New York', 'Dublin'],
//     printPlacesLived: function ()   {
//       const that = this; //metodo en ES5 para acceder a las propiedades anidadas

//       this.cities.forEach(function (city){
//           console.log(that.name + ' a vivido en ' + city);
//       });

//       }
//     };
//     user.printPlacesLived();
  
  
// this keyword - no longer bound

  
  const usuario = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
    //el metodo .map me permite hacer un bucle sobre el array sin modificarlo, como si fuera foreach
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(usuario.printPlacesLived());
  
  // Challenge area
  const multiplicador = {
      numeros: [1,2,3],
      multiPor:3,
      multiplica() {
          return this.numeros.map((multi) => this.multiPor * multi); 

      }

      // numeros - array de num 
      // multiPor - singlenumber
      //multiplica - devuelve un array nuevo con los numeros multiplicados
  }

/*   console.log(multiplicador.multiplica());

  const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply()); */
  

  
  
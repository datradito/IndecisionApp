var nameVar = 'Daniel ';
var nameVar = 'Agstin ';
console.log('nameVar', nameVar);

let nameLet = 'Brnda';
nameLet = 'Brnda2';
console.log('nameLet',nameLet);

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

//const NO PUEDE SER REASIGNADA, QUEDA CONSTANTE
const fullName = 'Jen Mead';
//uso let porque la reasigno en el if
let firstName;

//METODO SPLIT DIVID EL STRING BUSCANDO UN CARACTER, EN ESTE CASO DIVIDE CUANDO ENCUENTRA ' '. Y LUEGO ARMA UN VECTOR CON LAS DIVISIONES, Q COMIENZA CON 0

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
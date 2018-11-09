import React from 'react';
import ReactDOM from 'react-dom';
//webpack gestiona el .js
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// //import './utils.js';
// import {square, add} from './utils.js';
// import isSenior, {isAdult, canDrink} from './person.js';

// console.log('app.js funciona!!!');
// console.log(square(4));
// console.log(add(112,115));

// console.log(isAdult(17));
// console.log(canDrink(21));
// //Prueba export deault
// console.log(isSenior(60));
//import ReactDOM from "react-dom";
//import React from "react";

console.log('App.js funciona');

//JSX - Javascript XML
//solo render el subtitulo y p tag, si subtitulo existe (operador logico)
//render new p tag - if opcion.lenght>0 "aqui estan sus opciones"
//"no hay opciones"

const app = {
	titulo: 'Indecision App',
	subtitulo: 'Pone tu vida on line',
	options: [],

};

const onFormSubmit = (e) => {
	e.preventDefault();
  
	const option = e.target.elements.option.value;
  
	if (option) {
	  app.options.push(option);
	  e.target.elements.option.value = '';
	  render();
	}
};
  
  const onRemoveAll = () => {
	app.options = [];
	render();
	};
	
	const onTomarDesicion = () => {
		//GENERO RANDOM NUMBERS Y REDONDEO CON MATH.FLOOR
		const randomNum = Math.floor(Math.random()*app.options.length);
		const option = app.options[randomNum];
		console.log(randomNum);
		alert(option);
	};
  
  const appRoot = document.getElementById('app');
  
  const render = () => {
	const template = (
	  <div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Aca estan tus opciones' : 'Sin opcion'}</p>
		<button disabled={app.options.length === 0} onClick={onTomarDesicion}>Que voy a hacer???</button>
		<button onClick={onRemoveAll}>Remove All</button>
		<ol>
		  {
				app.options.map((option) => <li key={option}>{option}</li>)
			}
		</ol>
		<form onSubmit={onFormSubmit}>
		  <input type="text" name="option" />
		  <button>Agregar opcion</button>
		</form>
	  </div>
	);
  
		ReactDOM.render(template, appRoot);
  };
  
  render();
  

// const user = {
// 	nombre: 'DaNi',
// 	edad: 42,
// 	localidad: 'San Fernando',
// };

// function getLocadidad(loc){
// 	if (loc){
// 		return <p>Localidad: { loc } </p>;
// 	} else {
// 		return undefined; //si no hay localidad no muestro nada
// 	}
// };

// //EN JSX SI PASO undefined NO SE RENDERIZA NADA

// const template2 = ( 
// 	<div>
// 		{/*OPERADOR TERNARIO->> VALOR_EVALUADO ? TRUE : FALSE */}
// 		<h1>{user.nombre ? user.nombre : 'Sin Nombre'} </h1> 
// 		{(user.edad && user.edad >= 18) && <p>edad: { user.edad } </p> }	
		
// 		{getLocadidad(user.localidad)}
// 	 </div>
// );

//const appRoot = document.getElementById('app');

// @ts-ignore
//ReactDOM.render(template, appRoot);
//ReactDOM.render([template2,template], appRoot);



/*var template2 = ( 
	<div>
		<h1>{ userName.toLocaleUpperCase() + '!' } </h1> 
		<p>edad: { userAge } </p> 
		<p>localidad: { userLocation } </p>
	 </div>
);*/


//CREAR UN template2 VAR JSX EXPRESION
// div 
//  h1-> DAT
//  p-> edad: 41
//  p-> localidad: San Fernando
// Render template2 instead template


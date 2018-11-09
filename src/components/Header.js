import React from 'react';

//STATELES COMPONENT
const Header = (props) =>{
    return(
        <div>
            <h1>{props.t1}</h1>
            {/*CREO UN COMPONENTE DINAMICO, SI BORRO LA PROPIEDAD t2 DEL COMPONENTE IGUAL FUNCIONA*/}
            {props.t2 && <h2>{props.t2}</h2>}
        </div>
    );
};

//TRABAJO CON PROPIEDADES POR DEFECTO
Header.defaultProps = {
    t1: 'Indecision App default'
};


export default Header;
import React from  'react';

//STATELES COMPONENT
const Opcion = (props) =>{
    return (
        <div>
            {props.opctext}
            <button 
                onClick={(e)=>
                props.handlerBorraOpcion(props.opctext
                )}>

                borrar
            </button>
        </div>
    );
}

//POR SER UNA CONSTANTE SE EXPORTA ASI:
export default Opcion;
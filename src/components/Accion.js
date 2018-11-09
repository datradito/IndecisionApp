import React from   'react';

//STATELES COMPONENT
const Accion = (props) => {
    return(
        //handlerToma va sin () porque es una referencia NO una llamada a funcion
        <div>
            <button 
            onClick={props.handlerToma}
            disabled={!props.tieneOpciones} //ACCEDO A LAS PROPS DEL COMPONENTE <Accion />
            > Que tengo que hacer?
            </button>
        </div>
    );
}


export default Accion;
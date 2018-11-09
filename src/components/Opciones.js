import React from 'react';
import Opcion from  './Opcion'

//STATELES COMPONENT
const Opciones = (props) =>
{
    return (
        <div>
            {/*Accedo a las props de <Opciones />*/}
            <button onClick={props.handlerBorrarOpciones}> Borra Todo</button>
            <ol>
                <li>Cantidad de items en array: {props.opciones.length} </li>
                {props.opciones.map((opcion) => (
                    <Opcion 
                    key={opcion} 
                    opctext={opcion}
                    handlerBorraOpcion={props.handlerBorraOpcion}    
                    /> 
                ))}
                
                {/*CON map() HAGO LO MISMO, PARA CADA ITEM DEL ARRAY PASO opc COMO ARGUMENTO A LA FUNCION QUE INSERTA <p> XXX </p>*/}
                {/*this.props.opc.map((opc) => <p key={opc}>{opc}</p> )*/}

             </ol>
        </div>
    );
}

export default Opciones;
import React from 'react';

//CLASS COMPONENT
export default class AgregaOpc extends React.Component{
    //DEFINO UN state PARA MANEJAR EL ERROR DE handlerAgregaOpc(opcion)
    state = {
    //NUEVA SINTAXIS ES6/CLASS PROPERTIES
        error: undefined
    };

    //UTILIZO ARROW PARA EVITAR EL BIND
    handlerAgregaOpc = (e) => {
        // DETENGO EL EVENTO PARA PODER EJECUTAR EL handler
        e.preventDefault();
        console.log('tester');
      
        //QUITO LOS ESPACIOS VACIOS
        const opcion = e.target.elements.opcion.value.trim();
        
        //GUARDO EL VALOR SI SALIO DE LA FUNCION CON ERROR
        const error = this.props.handlerAgregaOpc(opcion);

        this.setState(() => ( {error} ));

        if(!error){
            //para vaciar el input
            e.target.elements.opcion.value=''
        }
    }


    render() {
        return (
        <div>
            {/*RENDEREO DINAMICAMENTE EL MENSAE DE ERROR, SI EXISTE MUESTRA (JSX)*/}
            {/*PRUEBA LOGICA && VERDADERO -> <p></p> FALSO->VACIO*/}
            {this.state.error && <p>{this.state.error}</p>}
            
            <form onSubmit={this.handlerAgregaOpc}>
		        <input type="text" name="opcion" />
		        <button >Agregar opcion</button>
		    </form>
        </div>);
    };
}
import React from 'react';
import AgregaOpc from './AgregaOpc';
import Accion from  './Accion';
import Header from  './Header';
import Opciones from    './Opciones';

export default class IndecisionApp extends React.Component{
    state = {
        opciones: []
    };

    //METODOS LIFE CYCLING:
    componentDidMount(){
        console.log('se monto el componente!');
        console.log('recuperando datos...'); //FETCH
        //realizo un try catch para evitar errores en el json
        try {
        const json = localStorage.getItem('opciones_local');
        //convierton el json en array/objeto
        const opciones = JSON.parse(json);
        //actualizo el array, (solo si no esta vacio!)
        if (opciones){
            this.setState(() => ({ opciones : opciones}));
            }
        }
        catch(e){
        //Si hay error no hago nada
        }
    }

    //este metodo se dispara despues de un cambio en en los states o props
    componentDidUpdate(prevProps, prevState) /* los arg pueden tomar el nombre q quiera*/{
        console.log('cambio de datos!');

        if (prevState.opciones.length!==this.state.opciones.length) {
            //En json guardo el array options
            const json = JSON.stringify(this.state.opciones);
            //paso el json a la variable local
            localStorage.setItem('opciones_local', json);
            console.log('guardando datos...');
        }
    } 
    
    componentWillUnmount(){
        console.log('se desmonto el componente!');
    }

    //Los sgtes handler's se incorporan para manipular el state de arriba, ya q el flujo de datos no puede subir desde el render()

    //ACCEDO A opciones EN EL STATE Y BORRO
     handlerBorrarOpciones = () => {
         this.setState(() =>({ opciones: [] }))
     }

     handlerBorraOpcion = (opcionABorrar) => {
         this.setState((prevState)=>({
            
            //LEER EL METODO array.filter()
            opciones:prevState.opciones.filter((opcion)=>
                {return opcionABorrar!== opcion}
            )
         }))
     }
    
    handlerToma = () => {
        const randomNum = Math.floor(Math.random() * this.state.opciones.length);
        const opcion = this.state.opciones[randomNum];
        alert(opcion);
    }

    handlerAgregaOpc= (opcion) => {
        //SI opcion es vacio, FALSE, NULL
        if (!opcion) {
          return 'Ingresa un valor valido para agregar un item';
        } 
        //.indexof(opcion) si la opcion no existe devuelve -1, match devuelve posicion
        else if (this.state.opciones.indexOf(opcion) > -1) {
          return 'Esta opcion ya existe';
        }
    
        this.setState((prevState) => ({
            opciones: prevState.opciones.concat([opcion])
        }));
        /* {
          return {
            //.concat() agrega la opcion al array
            opciones: prevState.opciones.concat([opcion])
          };
         */
    }

    render(){
        //const titulo = 'Indecision App';
        const subtitulo  ='Pon tu vida en las manos de una computadora!!!';
        
        
        return(
            <div id="app">
                <Header  t2={subtitulo}/>
            
                <Accion 
                    
                    tieneOpciones={this.state.opciones.length > 0} //TRUE or FALSE
                    handlerToma={this.handlerToma}
                />
            
                <Opciones 
                    opciones={this.state.opciones}
                    
                    //PASO A LA PROP LA FUCION PADRE ASI TNGO ACCESO AL state
                    handlerBorrarOpciones={this.handlerBorrarOpciones}
                    handlerBorraOpcion={this.handlerBorraOpcion}
                />
                
                <AgregaOpc 
                    handlerAgregaOpc={this.handlerAgregaOpc}
                />
            </div>
        )
    };
}
//LOS STATELESS COMPONENT LOS USO CUANDO SOLO TENGO Q ENVIAR ALGO A PANTALLA
class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handlerBorrarOpciones = this.handlerBorrarOpciones.bind(this);
        this.handlerBorraOpcion=this.handlerBorraOpcion.bind(this);
        this.handlerToma = this.handlerToma.bind(this);
        this.handlerAgregaOpc = this.handlerAgregaOpc.bind(this);
        this.state = {
          opciones: []
        };
      }
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

    //Los sgtes handler se incorporan para manipular el state de arriba, ya q el flujo de datos no puede subir desde el render()

    //ACCEDO A opciones EN EL STATE Y BORRO
     handlerBorrarOpciones(){
         this.setState(() =>({ opciones: [] }))
     }

     handlerBorraOpcion(opcionABorrar){
         this.setState((prevState)=>({
            
            //LEER EL METODO array.filter()
            opciones:prevState.opciones.filter((opcion)=>
                {return opcionABorrar!== opcion}
            )
         }))
     }
    
     /* handlerBorrarOpciones() {
        this.setState(() => {
          return {
            opciones: []
          };
        });
    } */


    handlerToma() {
        const randomNum = Math.floor(Math.random() * this.state.opciones.length);
        const opcion = this.state.opciones[randomNum];
        alert(opcion);
    }

    handlerAgregaOpc(opcion) {
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

//CLASS COMPONENT
class AgregaOpc extends React.Component{
    constructor(props) {
        super(props);
        this.handlerAgregaOpc = this.handlerAgregaOpc.bind(this);
        
        //DEFINO UN state PARA MANEJAR EL ERROR DE handlerAgregaOpc(opcion)
        this.state = {
          error: undefined
        };
    }

    //ESTE handlerAgregaOpc(e) esta dentro de la clase, x eso el .bind() arriba
    handlerAgregaOpc(e){
        // DETENGO EL EVENTO PARA PODER EJECUTAR EL handler
        e.preventDefault();
      
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




//POR CONVENCION EL COMPONENTE COMIENZA CON MAYUSCULA, PARA DIFERENCIARSE DE LAS ETIQUETAS HTML
/* const jsx = (
    <div>
        <Header />
        <Accion />
        <Opciones />
        <AgregaOpc />
    </div>
); */

/* class Opciones extends React.Component{
    //Con bind(this) uno los metodos para que tengan acceso a props
    constructor(props){
        super(props);
        this.handlerBorrarOpciones=this.handlerBorrarOpciones.bind(this);
    };

    handlerBorrarOpciones(){
        console.log(this.props.opc);
        //alert('handlerBorrarOpciones');
    }
    render(){
        return (
                CON map() HAGO LO MISMO, PARA CADA ITEM DEL ARRAY PASO opc COMO ARGUMENTO A LA FUNCION QUE INSERTA <p> XXX </p>
                this.props.opc.map((opc) => <p key={opc}>{opc}</p> )
            <div>
                <button onClick={this.handlerBorrarOpciones}> Borra Todo</button>
                <ol>
                    <li>Cantidad de items en array: {this.props.opc.length} </li>
                    {this.props.opc.map((opc) => <Opcion key={opc} opctext={opc}/> )}
                 </ol>
                <Opcion />
            
            </div>
        );
    }
} */

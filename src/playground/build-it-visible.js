console.log('app cambia visibilidad');
//PASO A COMPONENT STATE

class Cambiavisible extends React.Component{
    constructor(props){
        super(props);

        this.handlerCambiaVisible = this.handlerCambiaVisible.bind(this);
        this.state = {
            visible :true
        }
    }
    
    handlerCambiaVisible(){
        this.setState((previoEstado)=>{
                return{
                    visible: !previoEstado.visible
                }
            }
        )
    }

    render()
    {
        return(
            <div>
                <h1>Cambio de Visibilidad</h1>
                <button onClick={this.handlerCambiaVisible}>{this.state.visible ? 'Oculta texto' : 'Muestra texto'}</button>
                {/*si ver es false toda la expresion es false y no se renderea nada porque queda {indefinido*/}
                {this.state.visible && (
                    <div>
                        <p>Algunos detalle para ver!!!</p>
                    </div>)
                }
            </div>
        );
    }
    
}


ReactDOM.render(<Cambiavisible />, document.getElementById('app'));
/* 
		<button onClick={/*cambiaBoton*///}> {/*ver ? 'Oculta detalle' : 'Muestra detalle'*/ //}</button>
        
        
            //si ver es false toda la expresion es false y no se renderea nada
            // porque queda {indefinido}
        

        /*ver && (
        <div>
        <p>Algunos detalle para ver!!!</p>
        </div>
        )*/





/*
let ver= false;
const app = {
	titulo: 'Cambio de visibilidad',
};

const cambiaBoton =() => {
    ver=!ver; //niego en vez de asignar otro boolean!!!!!
    render();
};


 const render = () => {
	const codjsx = (
	  <div>
		<h1>{app.titulo}</h1>
		<button onClick={cambiaBoton}> {ver ? 'Oculta detalle' : 'Muestra detalle'}</button>
        
        {
            //si ver es false toda la expresion es false y no se renderea nada
            // porque queda {indefinido}
        }

        {ver && (
        <div>
        <p>Algunos detalle para ver!!!</p>
        </div>
        )}

	  </div>
      
	);
    ReactDOM.render(codjsx, document.getElementById('app'));

  };
  render(); */
  
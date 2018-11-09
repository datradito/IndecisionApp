class Contador extends React.Component{
  constructor(props){
    super(props);
    
    this.handlerAgregauno = this.handlerAgregauno.bind(this);
    this.handlerRestauno = this.handlerRestauno.bind(this);
    this.handlerReset = this.handlerReset.bind(this);

    //en el constructor defino el state como objeto, para poder verlo desde los metodos
    this.state = {
      //Pongo 0 en default xq aplico metodo life cycling
      contador : 0
    }
  }

  //METODOS LIFE CYCLING:
  componentDidMount(){
    //
    const stringContador = localStorage.getItem('contador_local');
    const contador = parseInt(stringContador,10);

    //VALIDO NO GRABAR DATOS SI EL CONTADOR ESTA VACIO
    if(!isNaN(contador)){
      this.setState( () => ({contador}));
    }
  }

  //este metodo se dispara despues de un cambio en en los states o props
  componentDidUpdate(prevProps, prevState) /* los arg pueden tomar el nombre q quiera*/{
    if (prevState.contador !== this.state.contador) {
      localStorage.setItem('contador_local', this.state.contador);
    }
    console.log('guardando datos...');
  }

  handlerAgregauno() {
    //console.log('agregauno');
    //el metodo setState me permite renderear automaticamente el state.
    //permite acceder al objeto state mediante su argumento.

    this.setState((estadoPrevio)=>{
      return {
      contador: estadoPrevio.contador + 1
      };
    });
      //return this.state.contador++;
  }

  handlerRestauno(){
    this.setState((estadoPrevio)=>{
      return {
        contador : estadoPrevio.contador-1
      }
    })
    //console.log('restauno')
  }

  handlerReset(){
    //para volver a cero no necesito el estado previo.
    this.setState(()=>{
      return {
        contador : 0
      }
    })
    //console.log('reset')
  }

  render() {
    return(
      <div>
        <h1>Cuenta2: {this.state.contador}</h1>
        <button onClick={this.handlerAgregauno}>+1</button>
        <button onClick={this.handlerRestauno}>-1</button>
        <button onClick={this.handlerReset}>reset</button>
      </div>
  );}
}

ReactDOM.render(<Contador />, document.getElementById('app'));


/* let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );


  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp(); */

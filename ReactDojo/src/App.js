import React, {Component} from 'react';
import './App.css';
import Resultado from './resultado';

class App extends Component {

  constructor(props){
    super(props);
    this.buscar("audifonos");
    this.state = {
      resultados:[]

    }

  }

  cambioInput(elemento){
    console.log('Valor: ', elemento.target.value);
  }

  buscar(busqueda){
//Fetch con funcion anonima
//el fetch sirve para hacer una peticion callback, luego de esto seguirà el then que serà la accion a seguir
//en el callback

    /*fetch('https://api.mercadolibre.com/sites/MCO/search?q='+busqueda)
      .then((resultado) => console.log("Resultado Json: ", resultado.json()))

  /*}*/


//Fetch con la funcion especificada

  fetch('https://api.mercadolibre.com/sites/MCO/search?q='+busqueda).then(function(resultado){
    console.log('Then');
    return resultado.json();
  }).then((json) => {
    this.setState({
        resultados: json.results
    })
  })
    console.log("Despues del then")
}
    render() {
        return (

          <div>
            <h1>David Esteban Alvarez Orozco</h1>
            <input type="text" placeholder="Search" onChange={this.cambioInput.bind(this)}></input>
            {this.state.resultados.map(function (resultado){
                return <Resultado resultado={resultado}></Resultado>;

            })}
          </div>
        );
    }
}

export default App;

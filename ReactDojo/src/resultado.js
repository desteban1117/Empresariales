import React,{Component} from 'react'

class Resultado extends Component {
  resultado = {};

  constructor(props){

    super(props);
    console.log(props.resultado);
    this.resultado=props.resultado;
  }

  render() {

    return(
      <div className="item">
        <div className="titulo">{this.resultado.title}</div>
        <img className="imagen" src={this.resultado.thumbnail}></img>
        <div className="precio">{this.resultado.price}</div>
        <div className="link"><a  href={this.resultado.permalink}>Màs Info</a></div>
      </div>


    );


  }
  }



export default Resultado;

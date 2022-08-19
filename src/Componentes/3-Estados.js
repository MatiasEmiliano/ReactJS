import React,{Component} from 'react';


export default class Estados extends Component{
    constructor(props){
        super(props)
        this.state={
            contador: 0,
        }
        setInterval(()=>{this.setState({contador:this.state.contador+1})},1000) //El estado se modifica con metodo setState no puedo poner this.state.contador = ....
    }
    render(){
        return <div>
            <h1>Estados</h1>
            <div>{this.state.contador}</div>
            <div>{<EstadoaHijo estado={this.state.contador} />}</div> {/*Paso de estado a Elemento hijo*/}
        </div>
    }
}

class EstadoaHijo extends Component{
    render(){
        return <div>{`Soy el hijo del de arriba: ${this.props.estado}`}</div>
    }
}
import React, { Component } from 'react';

export default class Padre extends Component {
    state = {
        contador: 0
    }
    render() {
        return <div>
            <h2>Comunicacion entre componentes</h2>
            <div>{this.state.contador}</div>
            <Hijo msj='Soy el hijo 1' incrementarContador={this.incrementarContador} /> {/*Pasaje por props a hijo*/}
            <Hijo msj='Soy el hijo 2' incrementarContador={this.incrementarContador} />
        </div>
    }
    incrementarContador = () => {
        { this.setState({ contador: this.state.contador + 1 }) }
    }

}

function Hijo(props) {
    return <div>
        <h3>{props.msj}</h3>
        <button onClick={props.incrementarContador}>Incrementar Contador</button> {/*Por accion de hijo modifica estado del padre*/}
    </div>
}
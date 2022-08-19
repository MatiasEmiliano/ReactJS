import React, { Component } from 'react';

export default class CicloVida extends Component {
    constructor(props) {
        super(props)
        console.log('0-Componente iniciado, aun no esta en el DOM')
        this.temporizador = null
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
    }
    componentDidMount() {
        console.log('1-Componente ya esta en el dom')
    }
    componentDidUpdate(prevProps, prevStates) {
        console.log('2-El estado o la props han cambiado')
        console.log(prevProps)
        console.log(prevStates)
    }
    render() {
        console.log('4-Componente se redibuja')
        return <div>
            <h2>Ciclo de Vida</h2>
            {this.state.visible && <Reloj hora={this.state.hora} />}  {/* Es lo mismo que: {this.state.visible===true ? <Reloj hora={this.state.hora} /> : <div></div>}*/}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
        </div>
    }
    iniciar = () => {
        this.tictac()
        this.setState({ visible: true })
    }
    detener = () => {
        clearInterval(this.temporizador)
        this.setState({ visible: false })
    }
    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000)
    }
}

class Reloj extends Component {
    render() {
        return <h3>
            {this.props.hora}
        </h3>
    }
    componentWillUnmount() {
        console.log('3-Componente ha dido eliminado del DOM')
    }
}

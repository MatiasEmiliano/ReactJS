import React, { Component } from 'react';



export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state={
            contador: 0
        }
        this.sumar=this.sumar.bind(this) //Sin esto no funciona el metodo sumar no puede modificar el estado.
        this.restar=this.restar.bind(this)
    }
    render(){
        return (
            <div>
                <h2>EventosES6</h2>
            <div>{this.state.contador}</div>
            <button onClick={this.sumar}>+</button> {/*Evento onCLick*/}
            <button onClick={this.restar}>-</button>
            </div>
        )
    }
    sumar(e){
       this.setState({contador: this.state.contador+1})
    }
    restar(e){
        this.setState({contador: this.state.contador-1})
     }
}

export class EventosES7 extends Component{  //Diferencia con ES&: Sin constructor, Sin el this del state, sin Bindeo por las arrows function
    state={
        contador: 0
    }
    render(){
        return (
            <div>
            <h2>EventosES7</h2>
            <div>{this.state.contador}</div>
            <button onClick={this.sumar}>+</button> {/*Evento onCLick*/}
            <button onClick={this.restar}>-</button>
            </div>
        )
    }
    sumar = ()=>{
       this.setState({contador: this.state.contador+1})
    }
    restar = ()=>{
        this.setState({contador: this.state.contador-1})
     }
}


export class OtrosEventos extends Component{
    render(){
        return <div>
            <h2>Otros Eventos</h2>
            <button onClick={this.handleEvent}>MyButton</button>
        </div>
    }
    handleEvent = (e) => {
        console.log(e) //Accede al evento como un SyntheticBaseEvent
        console.log(e.target)
        console.log(e.nativeEvent)  //Accede al evento tal como lo da JS
    }
}

export class EventosPersonalizados extends Component{
    render(){
        return <div>
        <h2>Eventos PErsonalziados</h2>
        <MyButton myClick ={()=>{this.handleClick('Mi mensaje')}}/>
    </div>
    }

    handleClick = (msj)=>{
        console.log(msj)
    }
}

function MyButton(props){
    return <button onClick={props.myClick}>MyButton</button>
}

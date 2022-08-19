import React,{Component} from 'react';

//Declarar componenete como clase:
// class Componente extends Component{
//     render(){    // Metodo render obligatorio y siempre con return
//         return <h2>{`${this.props.msj} de clase`}</h2>
//     }
// }

//Declarar componenete como funcion:
function Componente(props){
        return <h2>{`${props.msj} de funcion`}</h2>
}

export default Componente;




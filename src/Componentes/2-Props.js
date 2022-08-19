import React,{Component} from 'react';


class Propiedades extends Component{
    render(){
        return <div>
            {this.props.porDefecto}
            <ul>
                <li>{this.props.cadena}</li>
                <li>{this.props.numero}</li>
                <li>{this.props.bool ? "Verdadero" : "Falso"}</li>
                <li>{this.props.arr.join(', ')}</li>
                <li>{`${this.props.obj.name} ${this.props.obj.apellido}`}</li>
                <li>{this.props.elem}</li>
                <li>{this.props.func(3)}</li>
                <li>{this.props.arr.map((e)=>{return this.props.func(e)}).join(', ')}</li>
                <li>{this.props.compo}</li>
            </ul>
            </div>
    } 
}

Propiedades.defaultProps={
    porDefecto: "Las Propiedades",
}


export default Propiedades;
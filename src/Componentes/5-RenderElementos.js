import React, { Component } from 'react';
import data from '../Helpers/frameworks.json'

function ListItem(props) {
    return (
        <li>
            <a href={props.dat.http}>{props.dat.name}</a>
        </li>
    )
}


export default class RenderElementos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seasons: ['Primavera', 'Otoño', 'Verano', 'Invierno']
        }
    }

    render() {
        return (<div>
            <h2>Render de Elementos</h2>
            {this.state.seasons.map((e, index) => <div key={index}>{e}</div>)} {/*Siempre poner atributo 'key'*/}
            <h2>Render de Elementos de archivo JSON</h2>
            <ul>
                {data.map(e => <ListItem key={e.id} dat={e} />)} {/*Siempre poner atributo 'key'*/}
            </ul>
        </div>)
    }

}
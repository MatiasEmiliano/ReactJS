import React, { Component } from "react";

export default class AjaxComponente extends Component {
    state ={
        pokemons: []
    }
    render() {
        return <div>
            <h2>Peticiones Asincronicas</h2>
            {this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar ={el.avatar}/>)}
        </div>
    }
    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon"
        fetch(url).
            then((res) => res.json()).
            then((json) => {
                json.results.forEach((el) => {
                    fetch(el.url).
                        then((res) => res.json()).
                        then((json) => {
                            //console.log(json)
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            }
                            let pokemons = [...this.state.pokemons, pokemon]
                            this.setState({pokemons: pokemons})
                        })
                })
            })
    }
}


function Pokemon(props) {
    return <figure>
        <img src={props.avatar} alt={props.name}></img>
    </figure>
}
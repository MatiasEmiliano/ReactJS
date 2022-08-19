import React, { useState, useEffect } from "react";

export default function HooksAjax() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon"

        fetch(url).
            then((res) => res.json()).
            then((json) => {

                json.results.forEach((el) => {
                    fetch(el.url).
                        then((res) => res.json()).
                        then((json) => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            }
                            setPokemons((pokemons)=>[... pokemons, pokemon])
                        }) 
                })
            })
    }, [])   //Se ejecuta solo al ser montado el componente, por consiguiente efecuta el fetch 1 sola vez.

    return <div>
        <h2>Hook y Peticiones Asincronicas</h2>
        {pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
    </div>
}


function Pokemon({avatar, name}){
    return <>
        <figure>
        <img src={avatar} alt={name}></img>
        </figure>
    </>
}
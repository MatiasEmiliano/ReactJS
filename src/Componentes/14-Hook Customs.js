import React, { useState, useEffect } from "react";
import { useFetch } from "./Menus Anidados/useFetch";

export default function HooksCustoms() {
    




    return <div>
        <h2>Hook y Peticiones Asincronicas</h2>
        {/* {pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)} */}
    </div>
}


function Pokemon({avatar, name}){
    return <>
        <figure>
        <img src={avatar} alt={name}></img>
        </figure>
    </>
}
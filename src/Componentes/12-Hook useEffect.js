import React, { useState, useEffect } from "react";


export default function RelojHooks() {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => { // Cuando cambia propiedad 'visible' se ejecuta este metodo, similar a ComponentDidUpdated()
        console.log("Actualizando....")
        let contador = setInterval(() => {
            setHora(new Date().toLocaleTimeString())
        }, 1000)

        return (() => {
            console.log("Desmontado....")
            clearInterval(contador)
        })
    }, [visible])

    const Tictac = (estado) => { setVisible(estado) }


    return (<>
        <h2>Reloj con Hooks</h2>
        {visible && <Reloj hora={hora} />}
        <button onClick={() => { Tictac(true) }}>Iniciar</button>
        <button onClick={() => { Tictac(false) }}>Detener</button>
    </>)
}

function Reloj(props) {
    return <h3>{props.hora}</h3>
}
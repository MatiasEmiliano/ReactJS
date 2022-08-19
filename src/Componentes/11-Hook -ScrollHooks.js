import React,{ useState, useEffect } from "react";  ///Tiene algo mal!!!!



export default function ScrollHooks(props){
    const [scrollY, setScrollY] = useState(0)
    const [contador, setContador] = useState(0)

    const detectarScroll = ()=> {
        setScrollY(window.pageYOffset)
    }
    
    window.addEventListener('scroll',detectarScroll)

    useEffect(()=>{
        console.log('Fase de Actualizacion')
    },[scrollY])  //Actualiza solo si cambia scrollY

    useEffect(()=>{
        console.log('Fase de Montaje')
        return ()=>{console.log('Fase de Fase de Desmontaje')}  //Al desmontarse, se ejecuta este callback
    },[])   //Actualiza solo una vez:  al montar


    
    return( <>
        <h2>Scroll Hooks</h2>
        <p>Scroll Y del navegador {scrollY} px</p>
        <p>Contador: {contador}</p>
        <button onClick={()=>{setContador(contador + 1)}}>+</button>
        </>
    )
}
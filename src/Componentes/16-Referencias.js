import React, { createRef } from "react";

//Referencias a un objeto del DOM, comparar el 'BotonTradicional' vs. 'Referencias':

export default function Referencias(){ //Boton hecho con createRef para referenciar elementos.
    let useMenu = createRef()  // Defino nombres de referencias
    let useBoton = createRef()

    const handleToggleMenu = (e)=>{
        if(e.target.textContent==="Cerrar"){
            useBoton.current.textContent="Mostrar" //Debo poner current porque asi es la estructura del obj que crea la referencia
            useMenu.current.style.display="none"
        }else{
            useBoton.current.textContent="Cerrar"
            useMenu.current.style.display="block"
        }
    }
    return <>   
    <button ref={useBoton} onClick={handleToggleMenu}>Cerrar</button> {/*Uso referencias: ref={NOmbre de la referencia}*/}
    <nav ref={useMenu}>
        <a href="">Item 1</a><br/>
        <a href="">Item 2</a><br/>
        <a href="">Item 3</a><br/>
        <a href="">Item 4</a><br/>
    </nav>
    </>
}


function BotonTradicional(){  //Boton hecho de la forma tradicional con getElementbyId para referenciar elementos.

    const handleToggleMenu = (e)=>{
        const menu = document.getElementById('menu')
        const boton = document.getElementById('boton')
        if(e.target.textContent==="Cerrar"){
            boton.textContent="Mostrar"
            menu.style.display="none"
        }else{
            boton.textContent="Cerrar"
            menu.style.display="block"
        }
    }
    return <>
    <button id="boton" onClick={handleToggleMenu}>Cerrar</button>
    <nav id="menu">
        <a href="">Item 1</a><br/>
        <a href="">Item 2</a><br/>
        <a href="">Item 3</a><br/>
        <a href="">Item 4</a><br/>
    </nav>
    </>
}

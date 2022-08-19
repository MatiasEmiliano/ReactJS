import React, { useState } from "react";
import "./18-Estilos.css"   //Hoja de Estilo
import stylesModule from "./18-Estilos.module.css"
//import "./18-EstilosSASS.scss"

export default function Estilos() {

    let myStyles = {
        borderRadius: '0.25rem',
        margin: '3rem',
    }

    return <>
        <section className="estilos">                               {/*En hoja de estilos importada al principio*/}
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">En Hoja Externa</h3>           {/*En hoja de estilos importada al principio*/}
            <h3 className="bg-react" style={myStyles}>En linea</h3> {/*myStyles: Objeto con las propiedades*/}
            <h3 className={stylesModule.error}>En Modulo</h3>       {/*COn modulos, importado al princpio*/}
            <h3 className={stylesModule.success}>En Modulo</h3>
            <h3 className="bg-sass">En hoja de estilos SASS</h3>    {/*Desde hoja scss importada al principio*/}
        </section>
    </>
}


//Ver el js '6-Eventos y Binder', el mismo ejemplo pero sin Hook. Doble de codigo!!!
import React,{ useState } from "react";


export default function ContadorHooks(props){
    
    const [contador, setContador] = useState(0) // 0: Valor inicial de contador. Contador es un estado. 
    
    const sumar = ()=>{
        setContador(contador + 1)
    }
    
    const restar = ()=>{
        setContador(contador - 1)
    }
    
    return <>
        <h2>Contador Hooks</h2>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </>  
}




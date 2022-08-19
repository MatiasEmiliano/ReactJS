import React, { useState } from "react";


export default function Formulario() {
    //Variables de estado, asociados a los datos del formulario y asocio metodos set a onChange en cada campo:
    
    //Opcion 1: Una variable y funcion set por cada campo:
    const [nombre, setNombre] = useState('')  
    const [sabor, setSabor] = useState('')
    const [pais, setPais] = useState('')
    const [agree, setAgree] = useState(false)

    //Opcion 2: Todas las variables en un Objeto y 2 funciones para los OnChange:
    const [form,setForm] = useState({})
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleChecked = (e)=>{
        setForm({...form,[e.target.name]:e.target.checked})
    }




    //Evento Submit:
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Form Enviado.....")
    }

    return <>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
        {/* Input: */}
        <label htmlFor="nombre">Nombre: <input type="text" id="name_input" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input></label><br />
        {/* Input Radio: */}
        <p>Selecciones Sabor: </p>
        <input type="radio" id="vain" name="sabor" value="Vainilla" onChange={(e) => setSabor(e.target.value)} defaultChecked></input><label htmlFor="vain">Vainilla</label><br />
        <input type="radio" id="choco" name="sabor" value="Chocolate" onChange={(e) => setSabor(e.target.value)}></input><label htmlFor="choco">Chocolate</label><br />
        <input type="radio" id="fru" name="sabor" value="Frutilla" onChange={(e) => setSabor(e.target.value)}></input><label htmlFor="fru">Frutilla</label><br />

        {/* Select: */}
        <p>Selecciones Pais: </p>
        <select name="pais" onChange={(e)=>setPais(e.target.value)} defaultValue="Argentina" >
            <option value="">---</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Peru">Peru</option>
        </select><br />

        {/* CheckBox: */}
        <label htmlFor="agree">Acepto terminos y condiciones</label>
        <input type="checkbox" name="agree" id="agree" onChange={(e)=>setPais(e.target.checked)}></input><br/>

        {/* Submit: */}
        <input type="submit" name="submit" id="button"></input>
        </form>
    </>

}
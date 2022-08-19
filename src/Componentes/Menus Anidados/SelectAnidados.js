import React, { useState, useEffect } from 'react';
import SelectList from './SelectList'





function SelectAnidados() {
    const [estado, setEstado] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [colonia, setColonia] = useState("");

    useEffect(() => {
        setMunicipio("")
        setColonia("")
    }, [estado]);

    useEffect(() => {
        setColonia("")
    }, [municipio]);


    return ( 
    <div>
        <h2>Menus Anidados</h2>
        <h2>Pais: Argentina</h2>
        <SelectList url="http://localhost:5000/Provincias" nombre="estado" handleChange={(e)=>{setEstado(e.target.value)}} flag={true}/>
        <SelectList url={`http://localhost:5000/${estado}`} nombre="municipios" handleChange={(e)=>{setMunicipio(e.target.value)}} flag={estado}/>
        <SelectList url={`http://localhost:5000/${municipio}`} nombre="colonia" handleChange={(e)=>{setColonia(e.target.value)}} flag={municipio}/>
    </div> 
    );
}

export default SelectAnidados;
import React, { useState, useEffect } from 'react';





function CrudForm({createData,updateData,dataToEdit}) {
    let iniForm ={
        nombre: "",
        apellido:""
    }
    const [form, setForm] = useState(iniForm)

    useEffect(() => {
        if(dataToEdit){
        setForm({nombre: dataToEdit.nombre,apellido: dataToEdit.apellido})
        }
    }, [dataToEdit]);

    const HandleSubmit = (e) =>{ 
        e.preventDefault()
        if(!form.nombre || !form.apellido ){
            alert("Los datos no pueden ser nulos")
            return;
        }else{
            if (!dataToEdit){
               createData(form)     
            }else{
               updateData(form) 
            } 
            setForm(iniForm)
        }
    }

    const HandleClear = (e) =>{
        setForm(iniForm)
    }
    const HandleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }


    return (  
        <div>
        <h3>Agregar</h3>
        <form onSubmit={HandleSubmit}>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={HandleChange} value={form.nombre}/>
            <input type="text" name="apellido" id="apellido" placeholder="Apellido" onChange={HandleChange} value={form.apellido}/>
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onClick={HandleClear}/>
        </form>
        </div>
    );
}

export default CrudForm;
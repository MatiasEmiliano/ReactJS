import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";



function CrudApi() {
    const [dB, setdB] = useState([]);
    const [dataToEdit, setdataToEdit] = useState(null);

    useEffect(() => {
     myFetch.get()
    }, []);

    const myFetch ={ //Arrays con metodos Get, Post, Put y Delete para consumir API REST
        get: ()=>{
            fetch("http://localhost:5000/Empleados")
            .then(rta => rta.json())
            .then((rta) => { setdB(rta) })
        } ,
        post: (data)=>{
            fetch('http://localhost:5000/Empleados', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(() => {myFetch.get() })
        } ,
        put:  (data)=>{
            fetch(`http://localhost:5000/Empleados/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                    .then(() => {myFetch.get() })
        } ,
        delete: (id)=>{
            fetch(`http://localhost:5000/Empleados/${id}`, {
                    method: 'DELETE',
                })
                    .then(() => {myFetch.get() })
        }
    }


    const createData = (data) => {
        data.id = Date.now()
        myFetch.post(data)
    }

    const updateData = (data) => {
        data.id = dataToEdit.id
        for (let i = 0; i < dB.length; i++) {
            if (dB[i].id===data.id) {
                myFetch.put(data)
            }
        }
        setdataToEdit(null)
    }

    const deleteData = (id) => {
        myFetch.delete(id)
        setdataToEdit(null)
    }


    return (
        <div>
            <h2>Crud API Rest Fetch</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} setdataToEdir={setdataToEdit} dataToEdit={dataToEdit} />
                <CrudTable data={dB} deleteData={deleteData} setdataToEdit={setdataToEdit} dataToEdit={dataToEdit} />
            </article>
        </div>
    );
}

export default CrudApi;

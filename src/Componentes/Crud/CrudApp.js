import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const inicialDB = [
    {
        id: 1,
        nombre: "Carlos",
        apellido: "Gimenez"
    },
    {
        id: 2,
        nombre: "Andres",
        apellido: "Gomez"

    },
    {
        id: 3,
        nombre: "Jose",
        apellido: "Alvarez"
    },
    {
        id: 4,
        nombre: "Aldo",
        apellido: "Alvarez"
    }
]



function CruddApp() {
    const [dB, setdB] = useState(inicialDB);
    const [dataToEdit, setdataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now()
        setdB([...dB, data])
    }

    const updateData = (data) => {
        data.id = dataToEdit.id
        let newData = dB.map(element => element.id === dataToEdit.id ? data : element)
        setdB(newData)
        setdataToEdit(null)
    }

    const deleteData = (id) => {
        let filtered = dB.filter((element) => {
            return (element.id !== id);
        });
        setdB(filtered)
        setdataToEdit(null)
    }

    return (
        <div>
            <h2>Crud App desde Array de Datos</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} setdataToEdir={setdataToEdit} dataToEdit={dataToEdit} />
                <CrudTable data={dB} deleteData={deleteData} setdataToEdit={setdataToEdit} dataToEdit={dataToEdit} />
            </article>
        </div>
    );
}

export default CruddApp;
import { createContext } from "react"
import { useState } from "react";

const DbContext = createContext()
const initialDB = [
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


const DbProvider = ({children}) =>{

    const [dB, setDB] = useState(initialDB);
    const [dataToEdit, setdataToEdit] = useState(null);
    
    const createData = (data) => {
        data.id = Date.now()
        setDB([...dB, data])
    }

    const updateData = (data) => {
        data.id = dataToEdit.id
        let newData = dB.map(element => element.id === dataToEdit.id ? data : element)
        setDB(newData)
        setdataToEdit(null)
    }

    const deleteData = (id) => {
        let filtered = dB.filter((element) => {
            return (element.id !== id);
        });
        setDB(filtered)
        setdataToEdit(null)
    }

    const data={dB,setDB,dataToEdit, setdataToEdit,createData,updateData,deleteData}


    return (
        <DbContext.Provider value={data}>
            {children}
        </DbContext.Provider>

    )
}

export default DbContext
export {DbProvider}
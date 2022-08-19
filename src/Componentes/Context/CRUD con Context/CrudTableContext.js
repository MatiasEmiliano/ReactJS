import { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import DbContext from '../context/dBContext';



function CrudTableContext() {  
    
    const{dB,setDB,dataToEdit, setdataToEdit,createData,updateData,deleteData}=useContext(DbContext)

    return (<div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {dB.map(e => <CrudTableRow data={e} key={e.id} deleteData={deleteData} setdataToEdit={setdataToEdit} />)}
            </tbody>
        </table>
    </div>
    );
}

export default CrudTableContext;
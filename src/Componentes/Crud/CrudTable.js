import CrudTableRow from "./CrudTableRow";



function CrudTable({data, deleteData ,setdataToEdit}) {  //{data} es la forma de destrurcturar el objeto props.  

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
                {data.map(e => <CrudTableRow data={e} key={e.id} deleteData={deleteData} setdataToEdit={setdataToEdit} />)}
            </tbody>
        </table>
    </div>
    );
}

export default CrudTable;
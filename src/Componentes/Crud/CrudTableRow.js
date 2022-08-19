


function CrudTableRow({data, deleteData, setdataToEdit}) {
    
    
    return (
 
        <tr>
                <td>{data.id}</td>
                <td>{data.nombre}</td>
                <td>{data.apellido}</td>
                <td>
                    <button onClick={()=>{setdataToEdit(data)}}>Editar</button>
                    <button onClick={()=>{deleteData(data.id)}}>Eliminar</button>
                </td>
        </tr>
    );
}

export default CrudTableRow;
import React from "react";

const DataTableRow = ({el, setDataToEdit, deleteData}) =>{
    let {id,site,username,password} = el;

    return(
        <tr>
            <td>{site}</td>
            <td>{username}</td>
            <td>{password}</td>
            <td>
                <button onClick={()=> setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default DataTableRow
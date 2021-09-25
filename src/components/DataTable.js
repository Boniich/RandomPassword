import React from "react";
import DataTableRow from "./DataTableRow";


const DataTable = ({data, setDataToEdit, deleteData}) =>{

    return(
        <div className="padding ">
            <h1 className="titles">Mis Sitios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sitio</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {data.length > 0 ? (data.map((el) => <DataTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)): (<tr><td colSpan="4">Sin Datos</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
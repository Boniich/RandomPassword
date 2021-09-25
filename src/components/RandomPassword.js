import React, { useEffect, useState } from "react"
import { helpHttp } from "../helpers/helpHttp";
import DataForm from "./DataForm"
import DataTable from "./DataTable";
import Loader from "./Loader";
import Message from "./Message";

const RandomPassword = () =>{

    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/data"

    useEffect(() =>{
        setLoading(true);
        helpHttp().get(url).then((res) =>{
            if(!res.err){
                setDb(res);
                setError(null);
            }else{
                setDb(null);
                setError(res);
            }
            setLoading(false);
        });
    }, [url]);


    const createData = (data) =>{

        data.id = Date.now();
        let options = {body:data, headers: {"content-type":"application/json"},};

        api.post(url, options).then((res)=>{
            if(!res.err){
                setDb([...db, res]);

            }else{
                setError(res);
            }
        })
    }

    const updateData = (data) =>{
        let endPoint = `${url}/${data.id}`;

        let options = {body:data, headers: {"content-type":"application/json"},
        };

        api.put(endPoint,options).then((res)=>{

            if(!res.err){
                let newData = db.map((el)=> (el.id === data.id ? data: el));
                setDb(newData);
            }else{
                setError(res);
            }
        });
    }

    const deleteData = (id) =>{
        let isDelete = window.confirm(`
        ¿Estas seguro que quieres eliminar la informacion de este sitio?`);

        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options = {
                headers: {"content-type": "application/json"},
            }

            api.del(endpoint,options).then(res=>{

                if(!res.err){
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData);
                }else{
                    setError(res);
                }
            })
        }
    }

    return(
        <>
        <DataForm 
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}/>
        {loading && <Loader />}
        {error && (<Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>)}
       {db && <DataTable data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}/>}
        </>
    )
}

export default RandomPassword
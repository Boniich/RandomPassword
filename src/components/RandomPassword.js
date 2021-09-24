import React, { useEffect, useState } from "react"
import { helpHttp } from "../helpers/helpHttp";
import DataForm from "./DataForm"

const RandomPassword = () =>{

    const [db, setDb] = useState(null);
    const [error,setError] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/data"

    useEffect(() =>{

        helpHttp().get(url).then((res) =>{
            if(!res.err){
                setDb(res);
                setError(null);
            }else{
                setDb(null);
                setError(res);
            }
        })
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

    return(
        <>
        <DataForm createData={createData}></DataForm>
        </>
    )
}

export default RandomPassword
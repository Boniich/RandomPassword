import React, { useState, useEffect } from 'react'

const initialForm ={
    id: null,
    site: "",
    username: "",
    password: "",
}


const DataForm = ({createData,updateData,dataToEdit,setDataToEdit}) =>{

    const [form,setForm] = useState(initialForm);

    useEffect(() =>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{  
            setForm(initialForm);
        }
    },[dataToEdit]);



    //when a change occured, we called useState hooks for take the value of each input.
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }   


    const handleSumit = (e) =>{
    e.preventDefault();

    if(!form.site || !form.username || !form.password){
        alert("Datos incompletos");
        return;
    }

    if(form.id === null){
        createData(form);
    }else{
        updateData(form);
    }

    handleReset();
    }

    const handleReset = (e) =>{
        setForm(initialForm);
        setDataToEdit(null);
    }


    return(
        <div className="padding conteiner-form">
            <h1 className="titles">{dataToEdit ? "Editar": "Agregar"}</h1>
            <form className="form" onSubmit={handleSumit}>
                <input className="inputs" type="text" name="site" placeholder="Site" onChange={handleChange} value={form.site}/>
                <input className="inputs" type="text" name="username" placeholder="username" onChange={handleChange} value={form.username}/>
                <input className="inputs" type="text" name="password" placeholder="password" onChange={handleChange} value={form.password}/>
                <section className="section-form-btns">
                <input className="form-btn" type="submit" value="Guardar"/>
                <input className="form-btn" type="reset" value="Resetear" onClick={handleReset}/>
                </section>
                
            </form>
        </div>
    )
}

export default DataForm
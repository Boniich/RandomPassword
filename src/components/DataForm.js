import React, { useState, useEffect } from 'react'

const initialForm ={
    id: null,
    site: "",
    username: "",
    password: "",
}


const DataForm = ({createData}) =>{

    const [form,setForm] = useState(initialForm);



    //when a change occured, we called useState hooks for take the value of each input.
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }   


    
    //Este evento va hacer que cuando se haga click en el boton enviar
    // Se cree un numero objeto (o modifique un viejo objeto) en la base de datos

    const handleSumit = (e) =>{
    e.preventDefault();

    if(!form.site || !form.username || !form.password){
        alert("Datos incompletos");
        return;
    }

    if(form.id === null){
        createData(form);
    }

    handleReset();
    }

    const handleReset = (e) =>{
        setForm(initialForm);
    }


    return(
        <div>
            <h1>Agregar</h1>
            <form onSubmit={handleSumit}>
                <input type="text" name="site" placeholder="Site" onChange={handleChange} value={form.site}/>
                <input type="text" name="username" placeholder="username" onChange={handleChange} value={form.username}/>
                <input type="text" name="password" placeholder="password" onChange={handleChange} value={form.password}/>
                <input type="submit" value="Guardar"/>
                <input type="reset" value="Resetear" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default DataForm
import React, { useState } from 'react'
import '../../css/contacto.css'

export const Contacto = () =>{

    const [formConsulta , setFormConsulta ] = useState({
        frm_nombre:'',
        frm_cel:'',
        frm_email:'',
        frm_consulta:''
    })

    
    const handleChange = (e) =>{
        setFormConsulta({
            ...formConsulta,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formConsulta)
    }
    return(
        <div>
            <div className='container-consultas'>
                <div>
                    <h1>Dejanos tu consulta</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input type="text" name='frm_nombre' onChange={handleChange} placeholder='Tu Nombre'/>
                    <label>Celular</label>
                    <input type="number" name='frm_cel' onChange={handleChange} placeholder="Tu Celular"/>
                    <label>Correo</label>
                    <input type="email" name='frm_email' onChange={handleChange} placeholder="Tu Correo"/>
                    <label>Consulta</label>
                    <textarea type='text' name='frm_consulta' onChange={handleChange}/>
                    <div className='container-button-contacto'>
                        <input type='submit' value='Enviar' id='button-contacto'/>
                    </div>
                </form>

                <div>
                    <div>
                        <div>
                            <p>Whatsapp : <a href=''></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import axios from 'axios'
import React, { useState } from 'react'
import '../../css/contacto.css'
import { Footer } from '../footer/footer'

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
    
    const handleSubmit = async(e) =>{
        await axios.post('https://devalmendra.online/contacto/data' , formConsulta)
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
                    <textarea type='text' name='frm_consulta' onChange={handleChange} height='300px'/>
                    <div className='container-button-contacto'>
                        <input type='submit' value='Enviar' id='button-contacto'/>
                    </div>
                </form>

                <div>
                    <div className='container-contacto-ws'>
                        <div>
                            <h4>Otros medios de contacto</h4>
                            <ul>
                                <li>Whatsapp : <a href=' https://wa.me/1136887781' target='_blank'>1136887781</a></li>
                                <li>Mail : <p> dineroenmanoit@gmail.com</p></li>
                            </ul>
                        </div>
                        <div className='contacto-horario-atencion'>
                            <h4>Horario de Atencion</h4>
                            <p>Lunes a Viernes de 8 a 17hs</p>
                            <p>Sabados y Domingo de 8 a 17hs</p>
                            <p>Feriados 8 a 17hs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
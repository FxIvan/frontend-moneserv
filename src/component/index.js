import React, { useState } from 'react'
import axios from 'axios'

export const Index = () =>{

    const [form,setForm] = useState({
        frm_email : '',
        frm_fullname : '',
        frm_telehpone : ''
    })

    const handleChange = (e) =>{
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(form)
        /*make condition that refresh the page to reciving the form*/
        await axios.post('http://159.223.96.104:8000/apidataform' , form)
        .then(statusPet=>{
            console.log(statusPet)
        })
        .catch(error=>{
            console.log(error.response.data)
        })
        //window.history.go();
    }

    return(
        <div>
            <div>
                <div>
                    <div>
                        <h2>Dejanos tu Consulta</h2>
                    </div>
                    <div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='email'>Email</label>
                                <input type="email" id='email' placeholder='tuemail@gmail.com' name='frm_email' onChange={handleChange}/>

                                <label htmlFor='name'>Nombre y Apellido</label>
                                <input type="text" id='name' placeholder='Jose Sanchez' name='frm_fullname' onChange={handleChange}/>

                                <label htmlFor='telephone'>Telefono de Contacto</label>
                                <input type="number" id='telephone' placeholder='1136887784' name='frm_telehpone' onChange={handleChange}/>

                                <input type="submit" value="Enviar"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
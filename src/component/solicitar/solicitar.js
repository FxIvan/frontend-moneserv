import React, { useState } from 'react'
import '../../css/style-solicitar.css'

export const Solicitar = () => {

    const [ stateForm , setForm ] = useState({
        frm_telefono:'',
        frm_nombreyapellido:'',
        frm_direccion:'',
        frm_altura:'',
        frm_provincia:'',
        frm_billetera:'',
        frm_cantidad:'',
        frm_ciudad_option:''
    })

    const [servicio , setServicio] = useState('0')
    const [ inputLleno , setInputLleno] = useState(false)

    const handleChange = (e) => {

        const nameCiudad = e.target.value
        const namePrueba = e.target.name

        console.log(namePrueba)

        console.log(nameCiudad)

        if(namePrueba === 'frm_ciudad_option'){
            switch(nameCiudad){
                case 'frm_quilmes':
                    return setServicio('450')
                case 'frm_berazategui':
                    return setServicio('550')
            }
        }

        if(namePrueba === 'frm_nombreyapellido'){
            if(nameCiudad.length > 5){
                  setInputLleno(true)
            }else{
                setInputLleno(false)
            }
        }

        setForm({
            ...stateForm,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log(stateForm)
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Telefono(Whatsapp)</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_telefono'/>
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Nombre y Apellido</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_nombreyapellido'
                                    />
                                <p className='m-0'>{inputLleno ? <p className='d-none'></p>:<p className='m-0'>debe ingresar este campo</p>}</p>
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Direccion</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_direccion'/>
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Altura</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_altura'/>
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Provincia</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder='Buenos Aires'
                                    onChange={handleChange}
                                    name='frm_provincia'/>
                            </div>
                            <div className='row container m-auto input-label-container-option'>
                       
                                <label className='p-0'>Ciudad</label>
                                <select id="mySelect" name='frm_ciudad_option' onChange={handleChange} >
                                    <option value="frm_quilmes">Quilmes</option>
                                    <option value="frm_berazategui">Berazategui</option>
                                </select>
                           
                            </div>
                            <div className='row container m-auto input-label-container-option'>
                         
                                <label className='p-0'>Billetera Virtual</label>
                                <select id="mySelect" name='frm_billetera' onChange={handleChange}>
                                    <option value="frm_mercado_pago">Mercado Pago</option>
                                    <option value="frm_berazategui">Uala</option>
                                    <option value="frm_lemoncash">Lemon Cash</option>
                                    <option value="frm_cvu">CVU</option>
                                </select>
                            
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Cantidad</label>
                                <input
                                    className='col-xs-12'
                                    type='number'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_cantidad'/>
                            </div>
                        </div>
                    </div>

                    <div className='container text-center mt-5 mb-1 container-total-producto'>
                        <div className='row d-flex col-xs-12'>
                            <div className='w-50'>
                                <h3>Monto Solicitado</h3>
                            </div>
                            <div className='w-50'>
                                <p>$ 3000</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='w-50'>
                                <h3>Costo del Servicio</h3>
                            </div>
                            <div className='w-50'>
                                <p>$ {servicio}</p>
                            </div>
                        </div>
                    </div>
                    <div className='container text-end'>
                        <div className='row m-auto container-total'>
                            <p className='w-50 text-center'>Total :</p>
                            <span className='w-50 text-center'>$ 3450</span>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='button-solicitar'>
                            <input type='submit' value='SOLICITAR' className="btn btn-success"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
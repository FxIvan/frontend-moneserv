import React, { useState } from 'react'
import '../../css/style-solicitar.css'

export const Solicitar = () => {

    const [ stateForm , setForm ] = useState({
        frm_telefono:'',
        frm_email:'',
        frm_nombreyapellido:'',
        frm_direccion:'',
        frm_altura:'',
        frm_piso:'',
        frm_departamento:'',
        frm_provincia:'Buenos Aires',
        frm_billetera:'',
        frm_cantidad:'',
        frm_ciudad_option:''
    })

    const [ servicio , setServicio] = useState('0')
    const [ inputLleno , setInputLleno] = useState(false)
    const [ inputTel , setInputTel ] = useState(false)
    const [ inputDireccion , setDireccion ] = useState(false)
    const [ inputAltura , setAltura ] = useState(false)

    const handleChange = (e) => {

        const nameValue = e.target.value
        const stateName = e.target.name

        if(stateName){
            if(stateName === 'frm_telefono'){

                if(nameValue.length > 9){
                    setInputTel(true)
                }else{
                    setInputTel(false)
                }
            }  

            if(stateName === 'frm_nombreyapellido'){
                if(nameValue.length > 5){
                      setInputLleno(true)
    
                }else{
                    setInputLleno(false)
                } 
            } 

            if(stateName === 'frm_direccion'){
                if(nameValue.length >= 1){
                    setDireccion(true)
                }else{
                    setDireccion(false)
                }
            }

            if(stateName === 'frm_altura'){
                if(nameValue.length >=1){
                    setAltura(true)
                }else{
                    setAltura(false)
                }
            }
        }

        console.log( "Name: " , stateName  + "Valor: ",nameValue)

        setForm({
            ...stateForm,
            [e.target.name]:e.target.value
        })

                
        if(stateName === 'frm_ciudad_option'){
            switch(nameValue){
                case 'frm_avellaneda':
                    return setServicio('600')
                case 'frm_quilmes':
                    return setServicio('450')
                case 'frm_berazategui':
                    return setServicio('550')
            }
        }
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
                                    placeholder='Ejemplo: 1136887781'
                                    onChange={handleChange}
                                    name='frm_telefono'
                                    />
                                    <p className='m-0'>{inputTel ? <p className='d-none'></p>:<p className='m-0'>debe ingresar el numero de telefono</p>}</p>
                            </div>

                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Email:</label>
                                <input
                                    className='col-xs-12'
                                    type='email'
                                    placeholder='example@gmail.com'
                                    onChange={handleChange}
                                    name='frm_email'
                                    />
                            </div>

                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Nombre y Apellido</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder='Tu Nombre y Apellido'
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
                                    placeholder='Ejemplo: Esquel'
                                    onChange={handleChange}
                                    name='frm_direccion'/>
                                    <p className='m-0'>{inputDireccion ? <p className='d-none'></p>:<p className='m-0'>debe ingresar este campo</p>}</p>
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Altura</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder='Ejemplo: 189'
                                    onChange={handleChange}
                                    name='frm_altura'/>
                                    <p className='m-0'>{inputAltura ? <p className='d-none'></p>:<p className='m-0'>debe ingresar este campo</p>}</p>
                            </div>

                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Piso</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_piso'/>
                            </div>

                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Departamento</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='frm_departamento'
                                    />
                            </div>

                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Provincia</label>
                                <input
                                    className='col-xs-12'
                                    type='text'
                                    placeholder='Buenos Aires'
                                    onChange={handleChange}
                                    name='frm_provincia'
                                    value='Buenos Aires'
                                    disabled
                                    />
                            </div>
                            <div className='row container m-auto input-label-container-option'>
                       
                                <label className='p-0'>Ciudad</label>
                                <select  name='frm_ciudad_option' onChange={handleChange} >
                                    <option value='frm_avellaneda'>Avellaneda</option>
                                    <option value="frm_quilmes">Quilmes</option>
                                    <option value="frm_berazategui">Berazategui</option>
                                </select>
                           
                            </div>
                            <div className='row container m-auto input-label-container-option'>
                         
                                <label className='p-0'>Billetera Virtual</label>
                                <select  name='frm_billetera' onChange={handleChange}>
                                    <option value='frm_no_selecciono' select='true'>Seleccione Billetera Virtual</option>
                                    <option value="frm_mercado_pago">Mercado Pago</option>
                                    <option value="frm_uala">Uala</option>
                                    <option value="frm_lemoncash">Lemon Cash</option>
                                    <option value="frm_cvu">CVU</option>
                                </select>
                            
                            </div>
                            <div className='row container m-auto input-label-container'>
                                <label className='col-xs-12 p-0'>Cantidad</label>
                                <input
                                    className='col-xs-12'
                                    type='number'
                                    placeholder='Cantidad Maxima: 5.000$'
                                    onChange={handleChange}
                                    name='frm_cantidad'
                                    max='5000'
                                    />
                            </div>
                        </div>
                    </div>

                    <div className='container text-center mt-5 mb-1 container-total-producto'>
                        <div className='row d-flex col-xs-12'>
                            <div className='w-50'>
                                <h3>Monto Solicitado</h3>
                            </div>
                            <div className='w-50'>
                                <p>$ {stateForm.frm_cantidad}</p>
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
                            <span className='w-50 text-center'>$ { Number(stateForm.frm_cantidad) + Number(servicio)}</span>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='button-solicitar'>
                           <>{ inputLleno && inputTel && inputDireccion && inputAltura ?  <input type='submit' value='SOLICITAR' className="btn btn-success"/>:<input type='submit' value='SOLICITAR' className="btn btn-success" disabled/>}</>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
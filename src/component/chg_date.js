import axios from 'axios'
import React, {useState} from 'react'
import '../css/style-charging.css'

export const ChargingData = () => {

    const [fomrState,
        setFormState] = useState({
        frm_url: '',
        frm_money: '',
        frm_uala: false,
        frm_mp: false,
        frm_lc: false,
        frm_cvu: false,
        frm_namelast: '',
        frm_number: '',
        frm_provincia: '',
        frm_ciudad: '',
        frm_dni: '',
        frm_verifisi: false,
        frm_verifino: false,
        frm_amountservi: ''
    })

    const handleChange = (e) => {

        const value = e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value

        setFormState({
            ...fomrState,
            [e.target.name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.post('http://159.223.96.104:8000/apidataform', fomrState)
    }

    return (
        <div>
            <div className='row  mt-5 container-mobile row'>
                <div className='pt-5 row'>
                    <form onSubmit={handleSubmit}>
                        <div className='slc-delivery-mbl container'>
                            <label for="url" className="form-label">Ingresa direccion URL del avatar</label>
                            <input
                                type='text'
                                placeholder='URL del avatar'
                                id="url"
                                className="form-control-plaintext"
                                onChange={handleChange}
                                name="frm_url"/>
                        </div>

                        {/*************************************************/}
                        <div className='slc-amount-mbl container'>
                            <label for="staticInput" className="form-label">Cantidad disponible</label>
                            <input
                                type="number"
                                className="form-control-plaintext"
                                id="staticInput"
                                onChange={handleChange}
                                name="frm_money"/>
                        </div>
                        <div className='slc-method-mbl'>
                            <div className='container-label-mb1'>
                                <label className="label">

                                    <div className="toggle">
                                        <input
                                            className="toggle-state"
                                            type="checkbox"
                                            value={true}
                                            onChange={handleChange}
                                            name="frm_uala"/>
                                        <label>Uala</label>
                                        <div class="indicator"></div>
                                    </div>
                                </label>
                                <label className="label">
                                    <div className="toggle">
                                        <input
                                            className="toggle-state"
                                            type="checkbox"
                                            value={true}
                                            onChange={handleChange}
                                            name="frm_mp"/>
                                        <label>Mercado Pago</label>
                                        <div class="indicator"></div>
                                    </div>
                                </label>

                            </div>

                            <div className='container-label-mb2'>
                                <label className="label">
                                    <div className="toggle">
                                        <input
                                            className="toggle-state"
                                            type="checkbox"
                                            value={true}
                                            onChange={handleChange}
                                            name="frm_lc"/>
                                        <label>Lemon Cash</label>
                                        <div className="indicator"></div>
                                    </div>
                                </label>
                                <label className="label">
                                    <div className="toggle">
                                        <input
                                            className="toggle-state"
                                            type="checkbox"
                                            value={true}
                                            onChange={handleChange}
                                            name="frm_cvu"/>
                                        <label>CVU</label>
                                        <div class="indicator"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='container date-mobile'>
                            <div>
                                <label>Datos del Cajero:</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre y Apellido"
                                    onChange={handleChange}
                                    name="frm_namelast"/>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Telefono(whatsapp)"
                                    onChange={handleChange}
                                    name="frm_number"/>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Provincia"
                                    onChange={handleChange}
                                    name="frm_provincia"/>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ciudad"
                                    onChange={handleChange}
                                    name="frm_ciudad"/>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="DNI"
                                    onChange={handleChange}
                                    name="frm_dni"/>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='text-center'>
                                <label>Verificado:</label>
                            </div>
                            <div className='col-sm-12 row w-20 m-auto text-align-center container-verificacion-mb'>
                                <div className="form-check col-sm-6">
                                    <div className=''>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="frm_verifisi"
                                            id="formRadioDefault"
                                            onChange={handleChange}
                                            value={true}/>
                                        <label className="form-check-label" for="formRadioDefault">Si</label>
                                    </div>
                                </div>
                                <div className="form-check col-sm-6">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="frm_verifino"
                                        id="formRadioChecked"
                                        onChange={handleChange}
                                        value={true}/>
                                    <label className="form-check-label" for="formRadioChecked">No</label>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex tarifa-mobile container'> 
                        <label className=''>Tarifa Repartidor</label>
                            <input
                                type="text"
                                className="form-control form-control-plaintext"
                                aria-label="Amount (to the nearest dollar)"
                                onChange={handleChange}
                                name="frm_amountservi"
                                placeholder='$'
                                />
                        </div>
                        <div className='pb-5 mt-5 text-center button-guardar-mobile'>
                            <input type='submit' value='Guardar'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
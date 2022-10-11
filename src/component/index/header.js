import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineFire} from 'react-icons/ai'

export const Header = () => {

    return (
        <div>
            <div className='container d-flex justify-content-around container-header'>
                <div>
                    <Link className='header-link-fire' to='/'><AiOutlineFire/></Link>
                </div>
                <div>
                    <Link className='header-link' to='/contacto'>CONTACTO</Link>
                </div>
                <div>
                    <Link className='header-link' to='/form/solicitud'>SOLICITAR</Link>
                </div>
                <div>
                    <Link className='header-link' to='/tarifa'>TARIFAS</Link>
                </div>
            </div>
        </div>
    )
}
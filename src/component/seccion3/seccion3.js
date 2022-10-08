import React from 'react'
import lemoncash from './img/lemoncash.png'
import mercadopago from './img/mercadopago.png'
import uala from './img/uala.jpg'

import '../../css/seccion3.css'

export const Seccion3 = () =>{
    
    return(
        <div>
            <div className='container-seccion3'>
                <div className='container-seccion3-titulo'>
                    <h3>MEDIOS DE PAGO ACEPTADO</h3>
                </div>
                <div className='container-logo-seccion3'>
                    <div>
                       <h4>MERCADO <br/> PAGO</h4>
                    </div>
                    <div>
                        <h4>UALA</h4>
                    </div>
                    <div>
                        <h4>LEMON <br/> CASH</h4> 
                    </div>
                </div>
            </div>
        </div>
    )
}
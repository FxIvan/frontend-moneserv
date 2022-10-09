import React from 'react'
import {RiNumber1,RiNumber2,RiNumber3} from 'react-icons/ri'

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
                       <h4 className='mp'>MERCADO <br/> PAGO</h4>
                    </div>
                    <div>
                        <h4 className='uala'>UALA</h4>
                    </div>
                    <div>
                        <h4 className='lemon'>LEMON <br/> CASH</h4> 
                    </div>
                </div>
            </div>

            <div className='container-list-beneficio'>
                <div>
                    <div>
                        <ul>
                            <li><RiNumber1 className='number-list'/><p>SOLICITA EL DINERO</p></li>
                            <li><RiNumber2 className='number-list'/><p>TE CONTACTAMOS</p></li>
                            <li><RiNumber3 className='number-list'/><p>TE ENVIAMOS</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
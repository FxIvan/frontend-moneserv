import React from 'react'
import {AiOutlineFire} from 'react-icons/ai'
import '../../css/seccion1.css'

export const Seccion1 = () => {
    return (
        <div className="">
            
            <div className='container container-section1'>
                <div className='container-logo'>
                    <AiOutlineFire id='logo-icons'/>
                </div>
                <div className='container-title'>
                    <div>
                        <h1>Ten tu dinero a mano</h1>
                    </div>
                    <div>
                        <p>Solicita y nosotros te llevaremos el dinero a tu casa</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
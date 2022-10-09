import React from 'react'
import {AiOutlineFire , AiFillHeart} from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../../css/footer.css'

export const Footer = () =>{
    return(
        <div>
            <div className='container-footer'>
                <div>
                    <Link to='/'><AiOutlineFire className='footer-logo'/></Link>
                </div>
                <div className='container-develeper'>
                    <p>Desarrollador por <AiFillHeart></AiFillHeart> Almendra Ivan | 2022 <BiCopyright/></p>
                </div>
            </div>
        </div>
    )
}
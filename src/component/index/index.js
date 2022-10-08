import React, { useState } from 'react'
import { Header } from './header'
import '../../css/index.css'
import { Seccion1 } from '../seccion1/seccion1'
import { Seccion2 } from '../seccion2/seccion2'
import { Seccion3 } from '../seccion3/seccion3'

export const Index = () =>{
    return(
        <div>
            <div>
                <Seccion1/>
            </div>
            <div>
                <Seccion2/>
            </div>
            <div>
                <Seccion3/>
            </div>
        </div>
    )
}
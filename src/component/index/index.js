import React, { useState } from 'react'
import { Header } from './header'
import '../../css/index.css'
import { Seccion1 } from '../seccion1/seccion1'
import { Seccion2 } from '../seccion2/seccion2'

export const Index = () =>{
    return(
        <div>
            <div>
                <Seccion1/>
            </div>
            <div>
                <Seccion2/>
            </div>
        </div>
    )
}
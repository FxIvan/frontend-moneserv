import React, { useState } from 'react'
import { Header } from './header'
import '../../css/index.css'
import { Seccion1 } from '../seccion1/seccion1'
import { Seccion2 } from '../seccion2/seccion2'
import { Seccion3 } from '../seccion3/seccion3'
import { Footer } from '../footer/footer'

export const Index = () =>{
    return(
        <div>
            <section>
                <Seccion1/>
            </section>
            <section>
                <Seccion2/>
            </section>
            <section>
                <Seccion3/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Index } from '../component/index'
import { ChargingData } from '../component/chg_date'
import { Solicitar } from '../component/solicitar/solicitar'
import { Header } from '../component/index/header'


export const Router = () =>{
    return(
    <HashRouter>
        <Header/>
        <Routes>
            <Route path='/'       element={<Index/>} />
            <Route path='/charging/date' element={<ChargingData/>} />
            <Route path='/form/solicitud' element={<Solicitar/>} />
        </Routes>
    </HashRouter>
    )
}
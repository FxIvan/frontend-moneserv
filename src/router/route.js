import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Index } from '../component'
import { ChargingData } from '../component/chg_date'
import { Solicitar } from '../component/solicitar/solicitar'


export const Router = () =>{
    return(
    <HashRouter>
        <Routes>
            <Route path='/reserva'       element={<Index/>} />
            <Route path='/charging/date' element={<ChargingData/>} />
            <Route path='/form/solicitud' element={<Solicitar/>} />
        </Routes>
    </HashRouter>
    )
}
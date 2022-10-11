import React from 'react'
import '../../css/tarifa.css'

export const Tarifa = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Tarifas</h2>
                </div>
                <div className='container-target-price'>
                    <div className='container-tarjeta-1-2'>
                        <div className='container-tarjeta-1'>
                            <div>
                                <div>
                                    <ul>
                                        <li>Avellaneda</li>
                                        <li>Sarandi</li>
                                        <li>Villa Dominico</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>450$</h3>
                                </div>
                            </div>
                        </div>
                        <div className='container-tarjeta-2'>
                            <div>
                                <div>
                                    <ul>
                                        <li>Wilde</li>
                                        <li>Don Bosco</li>
                                        <li>Bernal</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>400$</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-tarjeta-3-4'>
                        <div className='container-tarjeta-3'>
                            <div>
                                <div>
                                    <ul>
                                        <li>Quilmes</li>
                                        <li>Ezpeleta</li>
                                        <li>Berazategui</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>350$</h3>
                                </div>
                            </div>
                        </div>
                        <div className='container-tarjeta-4'>
                            <div>
                                <div>
                                    <ul>
                                        <li>La Plata(centro)</li>
                                        <li>CABA</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>500$</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
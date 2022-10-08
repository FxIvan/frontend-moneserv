import React from 'react'
import logotellevamos from '../vectores/tellevamoslogo.svg'
import "../../css/seccion2.css"

export const Seccion2 = () => {
    return (
        <div>
            <div>
                <div className='container-frase'>
                    <div className='container-frase-imagen'>
                        <img src={logotellevamos}/>
                    </div>
                    <div className='container-frase-texto'>
                        <p>Ahora sera mas <span> facil </span> tener el dinero en mano sin tener que moverte de tu lugar</p>
                    </div>
                </div>
                <div className='container container-ciudades'>
                    <h3>Estamos activo en la Provincia de Buenos Aires, y actualmente hacemos envios
                        a estas ciudades</h3>
                    <div className='container-lista-ciudades'>
                        <div className='lista-ciudades-1'>
                            <ul>
                                <li>CABA</li>
                                <li>Avellaneda</li>
                                <li>Sarandi</li>
                                <li>Villa Dominico</li>
                                <li>Wilde</li>
                                <li>Don Bosco</li>
                            </ul>
                        </div>
                        <div className='lista-ciudades-2'>
                            <ul>
                                <li>Bernal</li>
                                <li>Quilmes</li>
                                <li>Ezpeleta</li>
                                <li>Berazategui</li>
                                <li>La Plata(centro)</li>
                            </ul>
                        </div>
                    </div>
                    <p>*consultar otras ciudades</p>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import ItemSeccion from './ItemSeccion'
import TituloSeccion from './TituloSeccion'

const SeccionEducacion = () => {
    return (
        <div className="p-2">
            <TituloSeccion titulo="Educación"/>
            <ItemSeccion titulo="Pbro. libardo aguirre" subtitulo="bachiller" texto="Enero 2005 - Diciembre 2016"/>
            <ItemSeccion titulo="universidad de antioquia" subtitulo="ingeniería de sistemas" texto="Agosto 2017 - Actualidad"/>
        </div>
    )
}

export default SeccionEducacion

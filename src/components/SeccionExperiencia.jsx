import React from 'react'
import ItemSeccion from './ItemSeccion'
import TituloSeccion from './TituloSeccion'

const SeccionExperiencia = () => {
    return (
        <div className="seccion">
            <TituloSeccion titulo="Experiencia"/>
            <ItemSeccion titulo="universidad de antioquia" subtitulo="auxiliar de programación" texto="Noviembre 2020 - Enero 2021"/>
            <ItemSeccion titulo="universidad de antioquia" subtitulo="desarrollador frontend" texto="Enero 2021 - Actualidad"/>
        </div>
    )
}

export default SeccionExperiencia

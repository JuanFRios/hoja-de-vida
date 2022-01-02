import React from 'react'
import ProgressBar from './ProgressBar'
import TituloSeccion from './TituloSeccion'

const SeccionHabilidades = () => {
    return (
        <div className="seccion">
            <TituloSeccion titulo="Habilidades"/>
            <ProgressBar titulo="Dedicación" porcentaje="90" />
            <ProgressBar titulo="Dialgo" porcentaje="90" />
            <ProgressBar titulo="Sociable" porcentaje="90" />
            <ProgressBar titulo="Inglés" porcentaje="40" />            
        </div>
    )
}

export default SeccionHabilidades

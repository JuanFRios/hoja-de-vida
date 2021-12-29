import React from 'react'
import ProgressBar from './ProgressBar'
import TituloSeccion from './TituloSeccion'

const SeccionTecnologias = () => {
    return (
        <div className="p-2">
            <TituloSeccion titulo="Tecnologías"/>
            <ProgressBar titulo="angular" porcentaje="70" />
            <ProgressBar titulo="react" porcentaje="40" />
            <ProgressBar titulo="git" porcentaje="90" />
            <ProgressBar titulo="python" porcentaje="70" />
            
        </div>
    )
}

export default SeccionTecnologias

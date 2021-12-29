import React from 'react'
import ItemSeccion from './ItemSeccion'
import TituloSeccion from './TituloSeccion'

const SeccionProyectos = () => {
    return (
        <div className="p-2">
            <TituloSeccion titulo="Proyectos"/>
            <ItemSeccion titulo="sistema de matrículas" subtitulo="angular" texto="Desarrollé el frontend de un sistema de matrículas para un colegio." link="link"/>
            <ItemSeccion titulo="Udea segura" subtitulo="angular" texto="Desarrollé el frontend de un sistema para el control de aforos en los espacios de la universidad de Antioquia." link="link"/>
            <ItemSeccion titulo="old wave" subtitulo="react native" texto="Desarrollé el frontend de una aplicación móvil ecommerce que permitía visualizar productos de varias tiendas." link="link"/>
        </div>
    )
}

export default SeccionProyectos

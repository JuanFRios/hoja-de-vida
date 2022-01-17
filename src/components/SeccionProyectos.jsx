import React from 'react';
import ItemSeccion from 'components/ItemSeccion';
import TituloSeccion from 'components/TituloSeccion';

const SeccionProyectos = () => (
  <div className='seccion lg:text-left'>
    <TituloSeccion titulo='Proyectos' />
    <ItemSeccion
      titulo='sistema de matrículas'
      subtitulo='angular'
      texto='Desarrollé el frontend de un sistema de matrículas para un colegio.'
      link='https://github.com/JuanFRios/Matriculas-colegio-frontend'
    />
    <ItemSeccion
      titulo='Udea segura'
      subtitulo='angular'
      texto='Desarrollé el frontend de un sistema para el control de aforos en los espacios de la universidad de Antioquia.'
      link='https://github.com/JuanFRios/UdeA-Segura'
    />
    <ItemSeccion
      titulo='old wave'
      subtitulo='react native'
      texto='Desarrollé el frontend de una aplicación móvil ecommerce que permitía visualizar productos de varias tiendas.'
      link='https://github.com/juanesgutiz19/old-wave-RN'
    />
  </div>
);

export default SeccionProyectos;

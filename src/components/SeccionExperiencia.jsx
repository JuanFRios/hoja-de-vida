import React from 'react';
import ItemSeccion from 'components/ItemSeccion';
import TituloSeccion from 'components/TituloSeccion';

const SeccionExperiencia = () => (
  <div className='seccion lg:text-left'>
    <TituloSeccion titulo='Experiencia' />
    <ItemSeccion
      titulo='universidad de antioquia'
      subtitulo='auxiliar de programación'
      texto='Noviembre 2020 - Enero 2021'
    />
    <ItemSeccion
      titulo='universidad de antioquia'
      subtitulo='desarrollador frontend'
      texto='Enero 2021 - Actualidad'
    />
  </div>
);

export default SeccionExperiencia;

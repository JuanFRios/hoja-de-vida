import React from 'react';
import ItemSeccion from 'components/ItemSeccion';
import TituloSeccion from 'components/TituloSeccion';

const SeccionEducacion = () => (
  <div className='seccion lg:text-right'>
    <TituloSeccion titulo='Educación' />
    <ItemSeccion
      titulo='Pbro. libardo aguirre'
      subtitulo='bachiller'
      texto='Enero 2005 - Diciembre 2016'
      posicionDerecha
    />
    <ItemSeccion
      titulo='universidad de antioquia'
      subtitulo='ingeniería de sistemas'
      texto='Agosto 2017 - Actualidad'
      posicionDerecha
    />
  </div>
);

export default SeccionEducacion;

import React from 'react';
import ProgressBar from 'components/ProgressBar';
import TituloSeccion from 'components/TituloSeccion';

const SeccionTecnologias = () => (
  <div className='seccion'>
    <TituloSeccion titulo='Tecnologías' />
    <ProgressBar titulo='angular' porcentaje='70' />
    <ProgressBar titulo='react' porcentaje='40' />
    <ProgressBar titulo='git' porcentaje='90' />
    <ProgressBar titulo='python' porcentaje='70' />
  </div>
);

export default SeccionTecnologias;

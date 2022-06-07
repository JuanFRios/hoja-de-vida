import React from 'react';
import ProgressBar from 'components/ProgressBar';
import TituloSeccion from 'components/TituloSeccion';

const SeccionTecnologias = () => (
  <div className='seccion'>
    <TituloSeccion titulo='Tecnologías' />
    <ProgressBar titulo='angular' porcentaje='80' />
    <ProgressBar titulo='react' porcentaje='80' />
    <ProgressBar titulo='git' porcentaje='95' />
    <ProgressBar titulo='node js' porcentaje='60' />
  </div>
);

export default SeccionTecnologias;

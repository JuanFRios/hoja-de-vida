import React from 'react';
import ProgressBar from 'components/ProgressBar';
import TituloSeccion from 'components/TituloSeccion';

const SeccionHabilidades = () => (
  <div className='seccion'>
    <TituloSeccion titulo='Habilidades' />
    <ProgressBar titulo='Dedicación' porcentaje='90' />
    <ProgressBar titulo='Diálogo' porcentaje='90' />
    <ProgressBar titulo='Sociable' porcentaje='90' />
    <ProgressBar titulo='Inglés' porcentaje='40' />
  </div>
);

export default SeccionHabilidades;

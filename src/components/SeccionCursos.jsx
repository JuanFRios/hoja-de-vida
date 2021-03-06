import React from 'react';
import ItemSeccion from 'components/ItemSeccion';
import TituloSeccion from 'components/TituloSeccion';

const SeccionCursos = () => (
  <div className='seccion lg:text-right'>
    <TituloSeccion titulo='Cursos' />
    <ItemSeccion titulo='Git y Github' subtitulo='platzi' />
    <ItemSeccion titulo='angular avanzado' subtitulo='udemy' />
    <ItemSeccion titulo='react' subtitulo='udemy' />
    <ItemSeccion titulo='react native' subtitulo='udemy' />
    <ItemSeccion titulo='Introducción a Figma' subtitulo='platzi' />
    <ItemSeccion titulo='Rendimiento en angular' subtitulo='platzi' />
    <ItemSeccion titulo='Introducción a mongo' subtitulo='coursera' />
  </div>
);

export default SeccionCursos;

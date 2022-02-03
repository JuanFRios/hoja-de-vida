import React from 'react';

const TituloSeccion = ({ titulo }) => (
  <div className='flex flex-col '>
    <LineaPunteada />
    <h1 className='uppercase text-white text-center text-2xl font-thin'>
      {titulo}
    </h1>
    <LineaPunteada />
  </div>
);

export const LineaPunteada = () => (
  <hr className='border-t-4 border-x-0 border-b-0 border-dotted border-Gris lg:m-2' />
);

export default TituloSeccion;

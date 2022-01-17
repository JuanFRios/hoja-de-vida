import React from 'react';

const ItemSeccion = ({ titulo, subtitulo, texto, link, posicionDerecha }) => {
  let classNameTexto = `text-Gris sm:text-justify md:text-center `;
  classNameTexto = posicionDerecha
    ? `${classNameTexto}lg:text-right`
    : `${classNameTexto}lg:text-left`;
  return (
    <div className='flex flex-col leading-tight py-2 '>
      <p className='uppercase text-AzulClaro font-medium'>{titulo}</p>
      <p className='uppercase text-white font-black tex'>{subtitulo}</p>
      {texto && <p className={classNameTexto}>{texto}</p>}
      {link && (
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='text-AzulClaro underline md:text-left'
        >
          Ver código
        </a>
      )}
    </div>
  );
};

export default ItemSeccion;

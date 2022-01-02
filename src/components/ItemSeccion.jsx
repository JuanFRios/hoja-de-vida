import React from 'react'

const ItemSeccion = ({titulo, subtitulo, texto, link}) => {
    return (
        <div className="flex flex-col leading-tight py-2">
            <p className="uppercase text-AzulClaro font-medium">{titulo}</p>
            <p className="uppercase text-white font-black">{subtitulo}</p>
            {texto && <p className="text-Gris text-justify md:text-center">{texto}</p>}
            {link && <a href={link} target="_blank" rel="noreferrer" className="text-AzulClaro underline md:text-left">Ver código</a>}
        </div>
    )
}

export default ItemSeccion
import React from 'react'

const ItemSeccion = ({titulo, subtitulo, texto, link}) => {
    return (
        <div className="flex flex-col leading-tight py-2">
            <p className="uppercase text-AzulClaro font-medium">{titulo}</p>
            <p className="uppercase text-white font-black">{subtitulo}</p>
            {texto && <p className="text-Gris text-justify">{texto}</p>}
            {link && <a href={link} className="text-AzulClaro underline">Ver código</a>}
        </div>
    )
}

export default ItemSeccion
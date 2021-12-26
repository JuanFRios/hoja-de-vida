import React from 'react'

const TituloSeccion = ({ titulo }) => {
    return (
        <div className="p-2 flex flex-col ">
            <LineaPunteada />
            <h1 className="uppercase text-white text-center">{titulo}</h1>
            <LineaPunteada />
        </div>
    );
}

const LineaPunteada = () => {
    return (
        <hr className="border-t-4 border-x-0 border-b-0 border-dotted border-Gris" />
    );
}

export default TituloSeccion

import React from 'react'
import perfil from './../assets/perfil.jpeg'

const Navbar = () => {
    return (
        <div className="bg-AzulMedio py-5 px-2 m-1 rounded-t-3xl">
            <div className="flex flex-col">
                <div className="flex items-center w-full">
                    <img src={perfil} alt="" className="navbar" />
                    <div className="ml-1 w-full">
                        <div className="flex flex-col items-center w-full leading-none">
                            <p className="title">Juan Fernando Ríos</p>
                            <p className="text-white italic font-extralight">Desarrollador Frontend</p>
                        </div>
                    </div>
                </div>
                <p className="text-justify text-white font-thin leading-none pt-2">Soy una persona seria, responsable y dinámica, con facilidad de adaptación. Disfruto del  constante aprendizaje y exploración de nuevas tecnologías. Busco crecer profesionalmente, aplicar y adquirir conocimientos.</p>
            </div>
            <div className="pt-2 flex flex-col">
                <div className="flex justify-between pt-2">
                    <ItemInformacion titulo="email" texto="juanfer4811@gmail.com" />
                    <ItemInformacion titulo="celular" texto="3117412979" />
                </div>
                <div className="flex justify-between pt-2">
                    <ItemInformacion titulo="fecha de nacimiento" texto="28/11/2020" />
                    <ItemInformacion titulo="experiencia" texto="1 año" />
                </div>
                <div className="flex justify-between pt-2">
                    <ItemInformacion titulo="dirección" texto="cRA 22 #20-104, cONCEPCIÓN aNTIOQUIA" />
                </div>
            </div>
        </div>
    )
}

const ItemInformacion = ({ titulo, texto }) => {
    return (
        <div className="flex">
            <p className="uppercase text-white text-xs">{titulo}:</p>
            <p className="uppercase text-AzulNormal text-xs pl-1"> {texto}</p>
        </div>

    );
}

export default Navbar

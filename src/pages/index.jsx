import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SeccionCursos from '../components/SeccionCursos';
import SeccionEducacion from '../components/SeccionEducacion';
import SeccionExperiencia from '../components/SeccionExperiencia';
import SeccionHabilidades from '../components/SeccionHabilidades';
import SeccionProyectos from '../components/SeccionProyectos';
import SeccionTecnologias from '../components/SeccionTecnologias';

export const Index = () => {
    return (
        <div>
            <div className="pb-2 lg:hidden">
                <Navbar />
                <div className="md:flex md:flex-col">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col w-full">
                            <SeccionEducacion />
                            <SeccionCursos />
                        </div>
                        <div className="md:flex md:flex-col w-full">
                            <SeccionExperiencia />
                            <SeccionProyectos />
                        </div>
                    </div>
                    <div className="md:flex w-full">
                        <SeccionTecnologias />
                        <SeccionHabilidades />
                    </div>
                </div>
                <Footer />
            </div>
            <IndexDesktop/>
        </div>

    )
}

const IndexDesktop = () => {
    return (
        <div>
            <Navbar/>
        </div>
    )
}

export default Index;

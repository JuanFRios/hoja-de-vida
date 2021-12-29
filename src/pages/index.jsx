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
        <div className="pb-2">
            <Navbar/>
            <SeccionEducacion/>
            <SeccionCursos/>
            <SeccionExperiencia/>
            <SeccionProyectos/>
            <SeccionTecnologias/>     
            <SeccionHabilidades/>       
            <Footer/>
        </div>
    )
}

export default Index;

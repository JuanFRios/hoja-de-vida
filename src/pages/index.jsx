import React from 'react'
import Navbar from '../components/Navbar';
import TituloSeccion from '../components/TituloSeccion';

export const Index = () => {
    return (
        <div className="pb-10">
            <Navbar/>
            <TituloSeccion titulo="Educación"/>
        </div>
    )
}

export default Index;

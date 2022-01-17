import React from 'react';
import perfil from 'assets/perfil.jpeg';
import Footer from 'components/Footer';

const NOMBRE = 'Juan Fernando Ríos';
const OFICIO = 'Desarrollador Frontend';
const DESCRIPCION =
  'Soy una persona seria, responsable y dinámica, con facilidad de adaptación. Disfruto del  constante aprendizaje y exploración de nuevas tecnologías. Busco crecer profesionalmente, aplicar y adquirir conocimientos.';

const Navbar = () => (
  <div>
    <div className='bg-AzulMedio py-5 px-2 m-1 rounded-t-3xl md:hidden lg:hidden'>
      <div className='flex flex-col'>
        <div className='flex items-center w-full'>
          <img src={perfil} alt='' className='navbar-img' />
          <div className='ml-1 w-full'>
            <div className='flex flex-col items-center w-full leading-none'>
              <p className='title'>{NOMBRE}</p>
              <p className='text-white italic font-extralight'>{OFICIO}</p>
            </div>
          </div>
        </div>
        <p className='descripcion'>{DESCRIPCION}</p>
      </div>
      <InformacionPersonal />
    </div>
    <NavbarMd />
    <NavbarDesktop />
  </div>
);

const NavbarMd = () => (
  <div className='hidden md:flex py-5 px-2 m-1 bg-AzulMedio rounded-l-full md:items-center lg:hidden'>
    <img src={perfil} alt='' className='navbar-img' />
    <div className='ml-1 flex flex-col md:px-2'>
      <div className='flex flex-col items-center w-full leading-none'>
        <p className='title'>{NOMBRE}</p>
        <p className='text-white italic font-extralight md:text-xl'>{OFICIO}</p>
      </div>
      <p className='descripcion'>{DESCRIPCION}</p>
      <InformacionPersonal />
    </div>
  </div>
);

const NavbarDesktop = () => (
  <div className='hidden lg:flex h-full w-80 rounded-t-full bg-AzulMedio p-4 flex-col items-center'>
    <img src={perfil} alt='' className='navbar-img' />
    <div className='flex flex-col items-center w-full leading-none lg:mt-2'>
      <p className='title'>{NOMBRE}</p>
      <p className='text-white italic font-extralight md:text-xl'>{OFICIO}</p>
    </div>
    <p className='descripcion'>{DESCRIPCION}</p>
    <InformacionPersonal />
    <Footer />
  </div>
);

const InformacionPersonal = () => (
  <div className='pt-2 flex flex-col'>
    <div className='flex justify-between pt-2 lg:flex-col'>
      <ItemInformacion titulo='email' texto='juanfer4811@gmail.com' />
      <ItemInformacion titulo='celular' texto='3117412979' />
    </div>
    <div className='flex justify-between pt-2 lg:flex-col'>
      <ItemInformacion titulo='fecha de nacimiento' texto='28/11/2020' />
      <ItemInformacion titulo='experiencia' texto='1 año' />
    </div>
    <div className='flex justify-between pt-2 lg:flex-col'>
      <ItemInformacion
        titulo='dirección'
        texto='cRA 22 #20-104, cONCEPCIÓN aNTIOQUIA'
      />
    </div>
  </div>
);

const ItemInformacion = ({ titulo, texto }) => (
  <div className='flex lg:flex-col lg:text-center lg:m-2'>
    <p className='uppercase text-white text-xs md:text-lg lg:text-sm'>
      {titulo}:
    </p>
    <p className='uppercase text-AzulNormal text-xs pl-1 md:text-lg lg:text-sm'>
      {' '}
      {texto}
    </p>
  </div>
);

export default Navbar;

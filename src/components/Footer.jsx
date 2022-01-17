import React from 'react';
import RedSocial from 'components/RedSocial';

const Footer = () => (
  <div className='footer'>
    <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
      <RedSocial icono='github-square' usuario='juanfrios' />
      <RedSocial icono='linkedin' usuario='juanfrios27' />
    </div>
    <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
      <RedSocial icono='youtube-square' usuario='juanfer4811' />
      <RedSocial icono='facebook-square' usuario='Juan Ríos' />
    </div>
    <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
      <RedSocial icono='instagram-square' usuario='jf_rios27' />
      <RedSocial icono='twitter-square' usuario='@juanfrios27' />
    </div>
  </div>
);

export default Footer;

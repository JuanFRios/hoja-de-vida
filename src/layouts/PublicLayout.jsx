import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className='flex flex-col h-screen justify-between bg-AzulOscuro'>      
      <div className='h-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
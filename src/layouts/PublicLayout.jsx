import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className='flex flex-col justify-between bg-AzulOscuro'>      
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="flex justify-center">
      <div className='flex flex-col justify-between bg-AzulOscuro max-w-5xl shadow-lg shadow-AzulOscuro'>
        <div >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
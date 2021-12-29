import React from 'react'

const RedSocial = ({ icono, usuario }) => {
    const className = `fab fa-${icono} icono`;
    return (
        <div className="bg-AzulMedio py-5 px-2 m-1 rounded-b-3xl flex flex-col items-center">
            <i className={className}></i>
            <p className="text-white">{usuario}</p>
        </div>
    )
}

export default RedSocial

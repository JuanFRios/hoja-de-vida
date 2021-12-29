import React from 'react'

const ProgressBar = ({titulo, porcentaje}) => {
    return (
        <div className="py-2 flex items-baseline">
            <p className="uppercase w-1/3 text-white text-sm font-bold">{titulo}</p>
            <div className="flex flex-col w-full">
                <div className="w-full bg-GrisMedio h-3 rounded-full">
                    <div className="bg-AzulClaro h-3 rounded-full" style={{width: porcentaje+'%'}}></div>
                </div>
                <p className="text-white w-full text-center">{porcentaje}%</p>
            </div>
        </div>
    )
}

export default ProgressBar

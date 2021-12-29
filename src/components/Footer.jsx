import React from 'react'
import RedSocial from './RedSocial'

const Footer = () => {
    return (
        <div className="bg-AzulMedio py-5 px-2 m-1 rounded-b-3xl flex justify-between">
            <div className="flex flex-col">
                <RedSocial icono="github-square" usuario="jf_rios27" />
                <RedSocial icono="linkedin" usuario="jf_rios27" />
            </div>
            <div className="flex flex-col">
                <RedSocial icono="youtube-square" usuario="jf_rios27" />
                <RedSocial icono="facebook-square" usuario="jf_rios27" />
            </div>
            <div className="flex flex-col">
                <RedSocial icono="instagram-square" usuario="jf_rios27" />
                <RedSocial icono="twitter-square" usuario="jf_rios27" />
            </div>
        </div>
    )
}

export default Footer

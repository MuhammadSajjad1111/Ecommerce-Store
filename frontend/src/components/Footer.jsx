import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className=' text-center'>  ProStore &copy;  {currentYear}</div>
    )
}

export default Footer;
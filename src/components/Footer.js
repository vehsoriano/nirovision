import React, { } from 'react';

import Logo from '../images/logo.png'

const Footer = () => {    

    return (
        <footer className="footer">
            <div className="logo-holder">
                <img className="logo" src={Logo} alt="Nirovision Logo"/>
            </div>
            <p>Made with &#9829; by @vehsoriano</p>
        </footer>
    )

}


export default Footer;
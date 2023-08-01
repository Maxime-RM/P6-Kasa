import React from "react";
import "./Footer.css"
import Logo from '../../assets/LOGO_2.svg'

export default function Footer() {
    return (

        <footer>
            <div className="footer-content">
                <img src={Logo} alt="Logo Kasa" className="logo_footer" />
                <p className="text_footer">© 2020 Kasa. All rights reserved</p>
            </div>
            
        </footer>

    )    
}
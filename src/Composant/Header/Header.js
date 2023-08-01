import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import Logo from '../../assets/LOGO.svg'

export default function Header() {
    return (

        <header>
                
                <img src={Logo} alt="Logo Kasa" className="logo_header" />

                <nav>
                    <Link to="/" className="nav_link">Acceuil</Link>
                    <Link to="/about" className="nav_link">A Propos</Link>                    
                </nav>

        </header>

    )    
}
import React from "react";
import "./NotFound.css"

export default function NotFound() {
    return (

        <section className="notfoundsection">           
            <h1 className="notfoundtitle">404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href="/" className="notfoundlink">Retourner sur la page d’accueil</a>
        </section>

    )    
}
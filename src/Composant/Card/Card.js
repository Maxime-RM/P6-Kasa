import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import HousingAds from "../../housing-ads.json";

export default function Card() {
  const CardItems = HousingAds.map((Housing) => (
    <Link className="housing_link" to={Housing.id} key={Housing.id}>
      <div className="housing_card">
        <img className="housing_img" src={Housing.cover} alt="présentation du logement"/>
      <h1 className="housing_title">{Housing.title}</h1>
      </div>
    </Link>
  ));

  return <div className="gallery">{CardItems}</div>;
}

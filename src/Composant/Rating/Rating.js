import React from 'react';
import "./Rating.css"
import HousingAds from '../../housing-ads.json';
import StarActive from '../../assets/star-active.svg'
import StarInactive from '../../assets/star-inactive.svg'

function Rating() {
    const url = window.location.href;
    const urlPart = url.split('/');
    const id = urlPart[urlPart.length - 1];
    const logement = HousingAds.find(ad => ad.id === id);

    const ratingValue = Math.floor(logement.rating);

    const stars = Array(5).fill().map((_, index) => (
        index < ratingValue ? <img key={index} src={StarActive} alt="Active star" /> : <img key={index} src={StarInactive} alt="Inactive star" />
    ));

    return (
        <div className='rating'>
            {stars}
        </div>
    );
}

export default Rating;
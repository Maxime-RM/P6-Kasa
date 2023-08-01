import React from 'react';
import "./HousingElements.css"
import HousingAds from '../../housing-ads.json';
import Rating from '../Rating/Rating';



function HousingPage() {
    const url = window.location.href;
    const urlPart = url.split('/');
    const id = urlPart[urlPart.length - 1];
    const logement = HousingAds.find(ad => ad.id === id);

    
        return (
                <div className='Housing_contents'>
                    <div className='Housing_name_location_tag'>

                        <h1 className='Housing_title'> {logement.title} </h1>
                        <h2 className='Housing_location'> {logement.location} </h2>
                        <ul className='Housing_tag_list'>
                            {logement.tags.map((tag, index) => (
                            <li className='Housing_tag' key={index}>{tag}</li>
                            ))}
                        </ul>

                    </div>

                    <div className='Housing_host_card'>

                        <div className='Housing_host'>
                            <h2 className='Housing_host_name'> {logement.host.name} </h2>
                            <img className='Housing_host_img' src={logement.host.picture} alt='Host'></img>
                        </div>

                        <Rating/>

                    </div>
                </div>
        );
    }

export default HousingPage;
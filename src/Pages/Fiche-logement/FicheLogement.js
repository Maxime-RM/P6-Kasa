import React from 'react';
import NotFound from '../404/NotFound';
import HousingElements from '../../Composant/HousingPage/HousingElements'
import Slider from '../../Composant/Carrousel/Carrousel';
import HousingAds from '../../housing-ads.json';
import Accordion from '../../Composant/Accordion/Accordion'

function FicheLogement() {

    const url = window.location.href;
    const urlPart = url.split('/');
    const id = urlPart[urlPart.length - 1];
    const logement = HousingAds.find(ad => ad.id === id);
    console.table(logement);

    
      if (!logement) {
        return <NotFound/>
    }else{

        const accordionItems = [
            {
              title: "Description",
              content: [logement.description,
              ]
            },
            {
                title: "Equipement",
                content: logement.equipments,
            },
          ];
    
        return (
            <main>
                <Slider/>
                <HousingElements/>
                <div className='Housing-accordion'>
                    <Accordion items={accordionItems} />
                </div>
            </main>
        );
    }

        
    }

    


export default FicheLogement;

import React from "react";
import Card from "../../Composant/Card/Card";
import Banner from "../../Composant/Banner/Banner";
import Bannerimg from "../../assets/IMG.png";

const bannerHomeText = `Chez vous,<br class="br-home"> partout et ailleurs`;

export default function Home() {
  return (
    <main>
      <Banner
        image={Bannerimg}
        text={<div dangerouslySetInnerHTML={{ __html: bannerHomeText }} />}
      />
      <Card />
    </main>
  );
}

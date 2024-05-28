import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewLetter/NewsLetter';
import Banner from '../Components/Banner/Banner'
import men_banner from '../Components/assets/men_banner_1.png'

function Shop() {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <Banner 
          title= "STANDOUT STYLES FOR THE SEASON AHEAD"
          subtitle="LATEST COLLECTIONS AVALIABLE"
          image={men_banner}
        />
        <NewsLetter />
    </div>
  )
}

export default Shop
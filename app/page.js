import React from 'react'
import Footer from './components/Footer';
import Ananas from './components/Ananas';
import BrandSection from './components/Egg';
import ServicesSection from './components/aplisinlchery';
import Partner from './components/Partner';
import Gallery from './components/Image';

function page() {
  return (
    <div>
      
      <Ananas />
       <BrandSection />
      <ServicesSection />
      <Partner />
      <Gallery />
    

     <Footer />
    </div>
  )
}

export default page
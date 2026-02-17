import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[600px]">
      
      {/* Блок Graphic Design */}
      <div className="relative w-full md:w-1/2 h-[600px] flex flex-col justify-end pb-14 px-6 text-center overflow-hidden">
        <Image 
          src="/chery.png" 
          alt="Graphic Design" 
          fill 
          priority
          className="object-cover"
        />
        
        {/* Контент поверх картинки */}
        <div className="relative z-10 max-w-[340px] mx-auto">
          <h2 className="font-serif text-[28px] font-black text-[#25564b] mb-6">
            Graphic design
          </h2>
          <p className="font-sans font-semibold text-[#25564b]/80 leading-relaxed">
            Great design makes you memorable. We deliver artwork that underscores 
            your brand message and captures potential clients' attention.
          </p>
        </div>
      </div>

      {/* Блок Photography */}
      <div className="relative w-full md:w-1/2 h-[600px] flex flex-col justify-end pb-14 px-6 text-center overflow-hidden">
        <Image 
          src="/apilsin.png" 
          alt="Photography" 
          fill 
          priority
          className="object-cover"
        />
        
        {/* Контент поверх картинки */}
        <div className="relative z-10 max-w-[340px] mx-auto">
          <h2 className="font-serif text-[28px] font-black text-[#19536b] mb-6">
            Photography
          </h2>
          <p className="font-sans font-semibold text-[#19536b]/80 leading-relaxed">
            Increase your credibility by getting the most stunning, high-quality 
            photos that improve your business image.
          </p>
        </div>
      </div>

    </section>
  );
}
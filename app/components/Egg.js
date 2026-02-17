import React from 'react';
import Image from 'next/image';git add .
export default function Sunnyside() {
  return (
    <div className="w-full overflow-hidden">
      
      {/* ПЕРВАЯ СЕКЦИЯ: Текст слева, Яйцо справа */}
      <section className="flex flex-col md:flex-row">
        {/* Текстовый блок */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 py-20 order-2 md:order-1">
          <div className="max-w-[435px]">
            <h2 className="text-5xl font-serif font-black text-slate-800 mb-6">
              Transform your brand
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              We are a full-service creative agency specializing in helping brands grow fast. 
              Engage your clients through compelling visuals.
            </p>
            <button className="uppercase font-serif font-black tracking-widest border-b-4 border-yellow-200 hover:border-yellow-400 transition-all">
              Learn More
            </button>
          </div>
        </div>
        {/* Картинка с яйцом */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src="/egg.png" alt="Egg" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* ВТОРАЯ СЕКЦИЯ: Бокал слева, Текст справа */}
      <section className="flex flex-col md:flex-row">
        {/* Картинка с бокалом */}
        <div className="w-full md:w-1/2">
          <img src="/stakan.png" alt="Cup" className="w-full h-full object-cover" />
        </div>
        {/* Текстовый блок */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 py-20">
          <div className="max-w-[435px]">
            <h2 className="text-5xl font-serif font-black text-slate-800 mb-6">
              Stand out to the right audience
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Using a collaborative formula of designers, researchers, photographers, 
              videographers, and copywriters, we'll build and extend your brand.
            </p>
            <button className="uppercase font-serif font-black tracking-widest border-b-4 border-red-100 hover:border-red-300 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
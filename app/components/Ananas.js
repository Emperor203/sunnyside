import React from 'react'

function Ananas() {
  return (
    <section className="relative flex flex-col items-center h-screen bg-[#3ebfff] pt-40 outline-none">
  <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-[0.25em] text-center z-10 font-serif">
    We are creatives
  </h1>

  <div className="mt-24 z-10">
    <svg width="36" height="114" viewBox="0 0 36 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3V111M18 111L3 96M18 111L33 96" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
  <div className="absolute bottom-0 w-full h-full">
    <img 
      src="https://sunnyside-agency-bene.vercel.app/images/desktop/image-header.jpg" 
      alt="Orange header" 
      className="w-full h-full object-cover object-bottom"
    />
  </div>
</section>
  )
}

export default Ananas
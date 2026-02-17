import Image from 'next/image'

export default function Gallery() {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 w-full">
      
    
      <div className="relative aspect-square overflow-hidden">
        <Image
          src="/image-gallery-milkbottles.jpg"
          alt="Milk bottles"
          fill
          className="object-cover"
        />
      </div>

    
      <div className="relative  overflow-hidden">
        <Image
          src="/image-gallery-orange.jpg"
          alt="Orange"
          fill
          className="object-cover"
        />
      </div>
      
      
      <div className="relative  overflow-hidden">
        <Image
          src="/image-gallery-cone.jpg"
          alt="Ice cream cone"
          fill
          className="object-cover"
        />
      </div>

     
      <div className="relative  overflow-hidden">
        <Image
          src="/image-gallery-sugarcubes.jpg"
          alt="Sugar cubes"
          fill
          className="object-cover"
        />
      </div>

    </div>
  )
}
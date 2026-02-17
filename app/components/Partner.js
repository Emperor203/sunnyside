import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Emily R.',
    role: 'Marketing Director',
    image: '/image-emily.jpg', 
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
  },
  {
    id: 2,
    name: 'Thomas S.',
    role: 'Chief Operating Officer',
    image: '/image-thomas.jpg',
    text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
  },
  {
    id: 3,
    name: 'Jennie F.',
    role: 'Business Owner',
    image: '/image-jennie.jpg',
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
  },
];

export default function Partner() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-center font-serif text-lg md:text-xl tracking-[0.2em] text-[#a7abae] uppercase mb-16 md:mb-24">
        Client Testimonials
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
         
            <div className="relative w-16 h-16 mb-10 md:mb-14">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            
            <p className="font-sans font-semibold text-[#5a636c] leading-relaxed mb-8 md:mb-12 max-w-[350px]">
              {item.text}
            </p>

           
            <div>
              <h3 className="font-serif text-[18px] font-black text-[#23303e] mb-2">
                {item.name}
              </h3>
              <p className="text-[14px] text-[#a7abae] font-sans">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
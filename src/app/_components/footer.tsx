import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },  
]

export function Footer() {
  return (
    <section className='bg-[#E84C3D] py-16 text-white'>
      <div className='container mx-auto px-4'>
        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas Que trabalhamos </h4>

          <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
            {brands.map((brand, index) => {
              return (
                <div 
                  key={index} 
                  className='bg-white p-4 rounded-lg items-center flex justify-center'
                >
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    width={100} 
                    height={50} 
                    quality={100} 
                    style={{
                      width: 'auto',
                      height: 'auto'
                    }}
                    className='object-contain rounded-lg' 
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>          
    </section>
  )
}
import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

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
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>PetShop Dev</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
            <Link 
              href="#"
              className="w-fit bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
              target='_blank'
            >
              <WhatsappLogo className='w-5 h-5' />
              Contato via WhatsApp
            </Link>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (99) 99999-9999 </p>
            <p>Rua: Rua Teste, 123 | RJ </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
            <div className='flex gap-4'> 
              <Link 
                href="#"
                target='_blank'
              >
                <FacebookLogo className='w-8 h-8' />
              </Link>

              <Link 
                href="#"
                target='_blank'
              >
                <InstagramLogo className='w-8 h-8' />
              </Link>

              <Link 
                href="#"
                target='_blank'
              >
                <YoutubeLogo className='w-8 h-8' />
              </Link>
            </div>
          </div>
        </footer>
      </div>          
    </section>
  )
}
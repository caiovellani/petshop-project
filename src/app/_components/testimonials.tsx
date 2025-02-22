'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import Image from 'next/image'

const testimonials = [
  {
    content: "Desde que comecei a levar a Luna para o banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Rafael",
    role: "Tutor do Thor (Golden Retriever)",
    image: tutor1
  },
  {
    content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila Fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor2
  }
]


export function Testimonials() {
  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    loop: true,
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }


  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className='overflow-hidden' ref={emblaRef}>
              <div className='flex'>
                {testimonials.map((testimonial, index) => {
                  return (
                    <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                      <div className='bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                        <div className='flex flex-col items-center text-center space-y-4'>
                          <div className='relative w-24 h-24'>
                            <Image src={testimonial.image} alt={testimonial.author} fill sizes='96px' className='object-cover rounded-full' />
                          </div>
                          <p className='text-gray-200 select-none'>{testimonial.content}</p>

                          <div>
                            <p className='font-bold'>{testimonial.author}</p>
                            <p className='text-sm text-gray-400'>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <button 
              type='button' 
              onClick={scrollPrev} 
              className='flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 bg-white' 
            >
              <ChevronLeft className='w-6 h-6 text-gray-600'  />
            </button>

            <button 
              type='button' 
              onClick={scrollNext} 
              className='flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 bg-white' 
            >
              <ChevronRight className='w-6 h-6 text-gray-600'  />
            </button>
          </div>
      </div>
    </section>
  )
}
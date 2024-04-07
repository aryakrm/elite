'use client'

import React from 'react'
import Image from 'next/image' 
import './Sec6.scss'
import useEmblaCarousel from 'embla-carousel-react'
import nesto from "../../../../public/static/images/nesto.png"
import almaya from "../../../../public/static/images/almaya.png"
import aswaaq from "../../../../public/static/images/aswaaq.png"
import carrefour from "../../../../public/static/images/carrefour.png"
import lulu from "../../../../public/static/images/lulu.png"
import Autoplay from 'embla-carousel-autoplay'

function Sec6() {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <section className='Sec6' >
      <h1>Where you can find Elite products</h1>
      
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      <div className='embla__slide' >
            <Image
      src={nesto}
      width={200}
      height={100}
      alt="nesto"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={almaya}
      width={200}
      height={100}
      alt="almaya"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={aswaaq}
      width={200}
      height={100}
      alt="aswaaq"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={carrefour}
      width={200}
      height={100}
      alt="carrefour"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={lulu}
      width={200}
      height={100}
      alt="lulu"
    /> 
            </div>
      </div>
      </div>
   
    </section>
  )
}

export default Sec6

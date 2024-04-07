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
import viva from "../../../../public/static/images/viva.jpeg"
import westzone from "../../../../public/static/images/westzone.png"
import uc from "../../../../public/static/images/uc.png"
import Autoplay from 'embla-carousel-autoplay'

function Sec6() {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className='Sec6' >
      <h1>Where you can find Elite products</h1>
      
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      <div className='embla__slide' >
            <Image
      src={nesto}
      width={150}
      height={100}
      alt="nesto"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={almaya}
      width={150}
      height={100}
      alt="almaya"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={aswaaq}
      width={150}
      height={100}
      alt="aswaaq"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={carrefour}
      width={150}
      height={100}
      alt="carrefour"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={lulu}
      width={150}
      height={100}
      alt="lulu"
    /> 
            </div>
            <div className='embla__slide' >
            <Image
      src={viva}
      width={150}
      height={100}
      alt="viva"
    /> 
            </div>

            <div className='embla__slide' >
            <Image
      src={uc}
      width={150}
      height={100}
      alt="uc"
    /> 
            </div>

            <div className='embla__slide' >
            <Image
      src={westzone}
      width={150}
      height={100}
      alt="westzone"
    /> 
            </div>

      </div>
      </div>
   
    </section>
  )
}

export default Sec6

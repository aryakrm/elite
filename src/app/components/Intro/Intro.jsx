'use client'

import './Intro.scss'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import almond from "../../../../public/static/images/products/almond.jpeg"
import blackEyed from "../../../../public/static/images/products/blackEyed.jpeg"
import cashew from "../../../../public/static/images/products/cashew.jpeg"
import chickPeas from "../../../../public/static/images/products/chickPeas.jpeg"
import lentils from "../../../../public/static/images/products/lentils.jpeg"
import matterDal from "../../../../public/static/images/products/matterDal.jpeg"
import pistachio from "../../../../public/static/images/products/pistachio.jpeg"
import popcorn from "../../../../public/static/images/products/popcorn.jpeg"
import rBean from "../../../../public/static/images/products/rBean.jpeg"
import wBean from "../../../../public/static/images/products/wBean.jpeg"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link';

function Intro() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className='Intro' >
        <div className='introLeft' ><Image
      src="/static/images/introPic.JPG"
      width={450}
      height={400}
      alt="Intro Image"
    /></div>
        <div className='introRight' >
          <div className='introRightMain' >
            <div className='title' >
              <h1>Elite Food & Beverage</h1>
              <h2>Enjoy The Taste With Elite</h2>
            <Link href="/products" ><button type='button' >Bulk Order</button></Link> </div></div>
            <div className='introBar' >
                <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      <div className='embla__slide' >
            <Image
      src={almond}
      width={150}
      height={150}
      alt="nesto"
    /> 
    <p>Roasted almond</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={blackEyed}
      width={150}
      height={150}
      alt="almaya"
    /> 
    <p>Black Eyed beans</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={cashew}
      width={150}
      height={150}
      alt="aswaaq"
    /> 
    <p>Salted cashews</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={chickPeas}
      width={150}
      height={150}
      alt="carrefour"
    /> 
    <p>Chick peas</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={lentils}
      width={150}
      height={150}
      alt="lulu"
    /> 
    <p>Green Lentils</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={matterDal}
      width={150}
      height={150}
      alt="viva"
    /> 
    <p>Matter Dal</p>
            </div>

            <div className='embla__slide' >
            <Image
      src={pistachio}
      width={150}
      height={150}
      alt="uc"
    /> 
    <p>Salted pistachio</p>
            </div>

            <div className='embla__slide' >
            <Image
      src={popcorn}
      width={150}
      height={150}
      alt="westzone"
    /> 
    <p>Yellow Popcorn</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={rBean}
      width={150}
      height={150}
      alt="westzone"
    /> 
    <p>Red kidney beans</p>
            </div>
            <div className='embla__slide' >
            <Image
      src={wBean}
      width={150}
      height={150}
      alt="westzone"
    /> 
    <p>White kidney beans</p>
            </div>

      </div>
      </div>
     </div>
        </div>
     
    </section>
  )
}

export default Intro

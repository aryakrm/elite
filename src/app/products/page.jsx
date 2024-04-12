'use client'


import React from 'react'
import './Products.scss'
import Image from 'next/image' 
import { Vidaloka } from 'next/font/google'
import { ProductsStore } from '../productsStore'
import useStore from '../orderStore'
import lentils from "../../../public/static/images/products/lentils.jpeg"
import almond from "../../../public/static/images/products/almond.jpeg"
import blackEyed from "../../../public/static/images/products/blackEyed.jpeg"
import cashew from "../../../public/static/images/products/cashew.jpeg"
import chickPeas from "../../../public/static/images/products/chickPeas.jpeg"
import matterDal from "../../../public/static/images/products/matterDal.jpeg"
import pistachio from "../../../public/static/images/products/pistachio.jpeg"
import popcorn from "../../../public/static/images/products/popcorn.jpeg"
import rBean from "../../../public/static/images/products/rBean.jpeg"
import wBean from "../../../public/static/images/products/wBean.jpeg"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import Link from 'next/link'




const vidaloka = Vidaloka({
    weight: '400',
    subsets: ['latin'],
  })


/*   'https://api.whatsapp.com/send/?phone=905338592488&text=How+are+you+%3F'
 */


function Products() {

  const { 
    lentilCount,
    incLentil,
    decLentil,
    chickCount,
    incChick,
    decChick,
    rBeanCount,
    incRbean,
    decRbean,
    wBeanCount,
    incWbean,
    decWbean,
    blackEyedCount,
    incBlackEyed,
    decBlackEyed,
    matterDalCount,
    incMatterDal,
    decMatterDal,
    popcornCount,
    incPopcorn,
    decPopcorn,
    cashewCount,
    incCashew,
    decCashew,
    almondCount,
    incAlmond,
    decAlmond,
    pistachioCount,
    incPistachio,
    decPistachio,
    } = useStore()

  return (
    <section className={vidaloka.className} id='Products' >
      <div className='productCards' key={1} >
             <Image
      src={lentils}
      width={350}
      height={350}
      alt={lentils}
    /> 
    <h1>Green Lentils</h1>
    <p>Canada 800g,400g</p>
    <div className='counter'>
    <button onClick={decLentil}><FaMinus /></button>
    <span>{lentilCount}</span>
    <button onClick={incLentil}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={2} >
             <Image
      src={chickPeas}
      width={350}
      height={350}
      alt={chickPeas}
    /> 
    <h1>Chick peas</h1>
    <p>Mexican 12mm 800g,400g</p>
    <div className='counter'>
    <button onClick={decChick}><FaMinus /></button>
    <span>{chickCount}</span>
    <button onClick={incChick}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={3} >
             <Image
      src={rBean}
      width={350}
      height={350}
      alt={rBean}
    /> 
    <h1>Red kidney beans</h1>
    <p>USA 800g,400g</p>
    <div className='counter'>
    <button onClick={decRbean}><FaMinus /></button>
    <span>{rBeanCount}</span>
    <button onClick={incRbean}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={4} >
             <Image
      src={wBean}
      width={350}
      height={350}
      alt={wBean}
    /> 
    <h1>White kidney beans</h1>
    <p>USA 800g,400g</p>
    <div className='counter'>
    <button onClick={decWbean}><FaMinus /></button>
    <span>{wBeanCount}</span>
    <button onClick={incWbean}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={5} >
             <Image
      src={blackEyed}
      width={350}
      height={350}
      alt={blackEyed}
    /> 
    <h1>Black Eyed beans</h1>
    <p>USA 800g,400g</p>
    <div className='counter'>
    <button onClick={decBlackEyed}><FaMinus /></button>
    <span>{blackEyedCount}</span>
    <button onClick={incBlackEyed}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={6} >
             <Image
      src={matterDal}
      width={350}
      height={350}
      alt={matterDal}
    /> 
    <h1>Matter dal</h1>
    <p>India 800g,400g</p>
    <div className='counter'>
    <button onClick={decMatterDal}><FaMinus /></button>
    <span>{matterDalCount}</span>
    <button onClick={incMatterDal}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={7} >
             <Image
      src={popcorn}
      width={350}
      height={350}
      alt={popcorn}
    /> 
    <h1>Yellow popcorn</h1>
    <p>USA 800g,400g</p>
    <div className='counter'>
    <button onClick={decPopcorn}><FaMinus /></button>
    <span>{popcornCount}</span>
    <button onClick={incPopcorn}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={8} >
             <Image
      src={cashew}
      width={350}
      height={350}
      alt={cashew}
    /> 
    <h1>Salted cashews</h1>
    <p>India 300g,150g</p>
    <div className='counter'>
    <button onClick={decCashew}><FaMinus /></button>
    <span>{cashewCount}</span>
    <button onClick={incCashew}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={9} >
             <Image
      src={almond}
      width={350}
      height={350}
      alt={almond}
    /> 
    <h1>Roasted almond</h1>
    <p>USA 300g,150g</p>
    <div className='counter'>
    <button onClick={decAlmond}><FaMinus /></button>
    <span>{almondCount}</span>
    <button onClick={incAlmond}><FaPlus /></button>
    </div>
        </div>
      <div className='productCards' key={10} >
             <Image
      src={pistachio}
      width={350}
      height={350}
      alt={pistachio}
    /> 
    <h1>Salted pistachio</h1>
    <p>Iran 300g,150g</p>
    <div className='counter'>
    <button onClick={decPistachio}><FaMinus /></button>
    <span>{pistachioCount}</span>
    <button onClick={incPistachio}><FaPlus /></button>
    </div>
        </div>
        <Link href={'https://api.whatsapp.com/send/?phone=971505640674&text=I+want+to+order%3A+' + lentilCount + '+' + 'Green Lentils,' + chickCount + '+' + 'Chick Peas,' + rBeanCount + '+' + 'Red Kidney Beans,' + wBeanCount + '+' + 'White Kidney Beans,' + blackEyedCount + '+' + 'BlackEyed Beans,' + matterDalCount + '+' + 'Matter Dal,' + popcornCount + '+' + 'Yellow Popcorn,' + cashewCount + '+' + 'Salted Cashews,' + almondCount + '+' + 'Roasted Almond,' + pistachioCount + '+' + 'Salted Pistachio,'} >Next <IoArrowForwardCircle /></Link>
    </section>
  )
}

export default Products

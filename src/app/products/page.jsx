'use client'


import React from 'react'
import './Products.scss'
import Image from 'next/image' 
import { Vidaloka } from 'next/font/google'
import useStore from '../orderStore'
import lentils from "../../../public/static/images/products/lentils.jpeg"
import almond from "../../../public/static/images/products/almond.jpeg"
import blackEyed from "../../../public/static/images/products/blackEyed.jpeg"
import cashew from "../../../public/static/images/products/cashew.jpeg"
import chickPeas from "../../../public/static/images/products/chickPeas.jpeg"
import matterDal from "../../../public/static/images/products/materDal.jpg"
import pistachio from "../../../public/static/images/products/pistachio.jpeg"
import popcorn from "../../../public/static/images/products/popcorn.jpeg"
import rBean from "../../../public/static/images/products/rBean.jpeg"
import wBean from "../../../public/static/images/products/wBean.jpeg"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import Link from 'next/link'
// import { t } from "i18next";
import { useTranslation } from "react-i18next";




const vidaloka = Vidaloka({
    weight: '400',
    subsets: ['latin'],
  })


/*   'https://api.whatsapp.com/send/?phone=905338592488&text=How+are+you+%3F'
 */


function Products() {

  const { t } = useTranslation();

  const { 
    lentilCount,
    incLentil,
    decLentil,
    lentilCountL,
    incLentilL,
    decLentilL,
    chickCount,
    incChick,
    decChick,
    chickCountL,
    incChickL,
    decChickL,
    rBeanCount,
    incRbean,
    decRbean,
    rBeanCountL,
    incRbeanL,
    decRbeanL,
    wBeanCount,
    incWbean,
    decWbean,
    wBeanCountL,
    incWbeanL,
    decWbeanL,
    blackEyedCount,
    incBlackEyed,
    decBlackEyed,
    blackEyedCountL,
    incBlackEyedL,
    decBlackEyedL,
    matterDalCount,
    incMatterDal,
    decMatterDal,
    matterDalCountL,
    incMatterDalL,
    decMatterDalL,
    popcornCount,
    incPopcorn,
    decPopcorn,
    popcornCountL,
    incPopcornL,
    decPopcornL,
    cashewCount,
    incCashew,
    decCashew,
    cashewCountL,
    incCashewL,
    decCashewL,
    almondCount,
    incAlmond,
    decAlmond,
    almondCountL,
    incAlmondL,
    decAlmondL,
    pistachioCount,
    incPistachio,
    decPistachio,
    pistachioCountL,
    incPistachioL,
    decPistachioL,
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
    <h1>{t("lentil")}</h1>
    <p>{t("canada800")}</p>
    <div className='counter'>
    <button onClick={decLentilL}><FaMinus /></button>
    <span>{lentilCountL}</span>
    <button onClick={incLentilL}><FaPlus /></button>
    </div>
    <p>{t("canada400")}</p>
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
    <h1>{t("chick")}</h1>
    <p>{t("mexican800")}</p>
    <div className='counter'>
    <button onClick={decChickL}><FaMinus /></button>
    <span>{chickCountL}</span>
    <button onClick={incChickL}><FaPlus /></button>
    </div>
    <p>{t("mexican400")}</p>
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
    <h1>{t("rBean")}</h1>
    <p>{t("usa800")}</p>
    <div className='counter'>
    <button onClick={decRbeanL}><FaMinus /></button>
    <span>{rBeanCountL}</span>
    <button onClick={incRbeanL}><FaPlus /></button>
    </div>
    <p>{t("usa400")}</p>
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
    <h1>{t("wBean")}</h1>
    <p>{t("usa800")}</p>
    <div className='counter'>
    <button onClick={decWbeanL}><FaMinus /></button>
    <span>{wBeanCountL}</span>
    <button onClick={incWbeanL}><FaPlus /></button>
    </div>
    <p>{t("usa400")}</p>
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
    <h1>{t("black_eyed")}</h1>
    <p>{t("usa800")}</p>
    <div className='counter'>
    <button onClick={decBlackEyedL}><FaMinus /></button>
    <span>{blackEyedCountL}</span>
    <button onClick={incBlackEyedL}><FaPlus /></button>
    </div>
    <p>{t("usa400")}</p>
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
    <h1>{t("dal")}</h1>
    <p>{t("usa800")}</p>
    <div className='counter'>
    <button onClick={decMatterDalL}><FaMinus /></button>
    <span>{matterDalCountL}</span>
    <button onClick={incMatterDalL}><FaPlus /></button>
    </div>
    <p>{t("usa400")}</p>
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
    <h1>{t("popcorn")}</h1>
    <p>{t("usa800")}</p>
    <div className='counter'>
    <button onClick={decPopcornL}><FaMinus /></button>
    <span>{popcornCountL}</span>
    <button onClick={incPopcornL}><FaPlus /></button>
    </div>
    <p>{t("usa400")}</p>
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
    <h1>{t("salted_cashew")}</h1>
    <p>{t("india300")}</p>
    <div className='counter'>
    <button onClick={decCashewL}><FaMinus /></button>
    <span>{cashewCountL}</span>
    <button onClick={incCashewL}><FaPlus /></button>
    </div>
    <p>{t("usa150")}</p>
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
    <h1>{t("almond")}</h1>
    <p>{t("usa300")}</p>
    <div className='counter'>
    <button onClick={decAlmondL}><FaMinus /></button>
    <span>{almondCountL}</span>
    <button onClick={incAlmondL}><FaPlus /></button>
    </div>
    <p>{t("usa150")}</p>
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
    <h1>{t("pistachio")}</h1>
    <p>{t("iran300")}</p>
    <div className='counter'>
    <button onClick={decPistachioL}><FaMinus /></button>
    <span>{pistachioCountL}</span>
    <button onClick={incPistachioL}><FaPlus /></button>
    </div>
    <p>{t("iran150")}</p>
    <div className='counter'>
    <button onClick={decPistachio}><FaMinus /></button>
    <span>{pistachioCount}</span>
    <button onClick={incPistachio}><FaPlus /></button>
    </div>
        </div>
        <Link href={'https://api.whatsapp.com/send/?phone=971504036780&text=I+want+to+order%3A+%0A+' + lentilCountL + '+' + 'Green Lentils(800gr),%0A' + lentilCount + '+' + 'Green Lentils(400gr),%0A' + chickCountL + '+' + 'Chick Peas(800gr),%0A' + chickCount + '+' + 'Chick Peas(400gr),%0A' + rBeanCountL + '+' + 'Red Kidney Beans(800gr),%0A' + rBeanCount + '+' + 'Red Kidney Beans(400gr),%0A' + wBeanCountL + '+' + 'White Kidney Beans(800gr),%0A' + wBeanCount + '+' + 'White Kidney Beans(400gr),%0A' + blackEyedCountL + '+' + 'BlackEyed Beans(800gr),%0A' + blackEyedCount + '+' + 'BlackEyed Beans(400gr),%0A' + matterDalCountL + '+' + 'Matter Dal(800gr),%0A' + matterDalCount + '+' + 'Matter Dal(400gr),%0A' + popcornCountL + '+' + 'Yellow Popcorn(800gr),%0A' + popcornCount + '+' + 'Yellow Popcorn(400gr),%0A' + cashewCountL + '+' + 'Salted Cashews(300gr),%0A' + cashewCount + '+' + 'Salted Cashews(150gr),%0A' + almondCountL + '+' + 'Roasted Almond(300gr),%0A' + almondCount + '+' + 'Roasted Almond(150gr),%0A' + pistachioCountL + '+' + 'Salted Pistachio(300gr),%0A' + pistachioCount + '+' + 'Salted Pistachio(150gr),%0A'} >{t("next")} <IoArrowForwardCircle /></Link>
    </section>
  )
}

export default Products

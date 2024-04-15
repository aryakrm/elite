'use client'

import React from 'react'
import './Sec7.scss'
import Image from 'next/image'
import adas from "../../../../public/static/images/adas.jpeg"
import bolboli from "../../../../public/static/images/bolboli.jpeg"
import peste from "../../../../public/static/images/peste.jpeg"
import { GiPlantSeed } from "react-icons/gi";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Sec7() {

  const { t } = useTranslation();

  return (
    <section className='Sec7' >
        <GiPlantSeed />
      <h1>{t("Sec7_title")}</h1>
        <div className="cards" >
            <div>
            <Image
      src={peste}
      width={250}
      height={250}
      alt="pste"
    /> 
    <p>{t("pistachio")}</p>
    <p>{t("pistachio_text")}</p>
            </div>
            <div>
            <Image
      src={adas}
      width={250}
      height={250}
      alt="adas"
    /> 
    <p>{t("lentil")}</p>
    <p>{t("lentil_text")}</p>
            </div>
            <div>
            <Image
      src={bolboli}
      width={250}
      height={250}
      alt="bolboli"
    /> 
    <p>{t("black_eyed")}</p>
    <p>{t("blackeyed_text")}</p>
            </div>
        </div>
    </section>
  )
}

export default Sec7

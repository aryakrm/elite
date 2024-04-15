'use client'


import React from 'react';
import "./Sec5.scss"
import Image from 'next/image'
import shareEx from "../../../../public/static/images/shareEx.JPG"
import { PiCookingPotBold } from "react-icons/pi";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Sec5() {

  const { t } = useTranslation();


  return (
    <section className="Sec5-container" >
      <div className='Sec5' >
      <PiCookingPotBold />
      <h1>
      {t("Sec5_title")}
      </h1>
      <form action="">
        <label htmlFor="name">{t("name")}:</label>
        <input type="text" />
        <label htmlFor="email">{t("email")}:</label>
        <input type="email" />
        <textarea name="message" id="message" cols="35" rows="10" placeholder={t("message")} ></textarea>
        <button type='submit' > {t("submit")} </button>
      </form>
      <p>
      {t("Sec5_text")}
      </p>
      </div>
      <Image
      src={shareEx}
      width={500}
      height={700}
      alt="shareEx"
    /> 
     
    </section>
  )
}

export default Sec5

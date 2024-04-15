'use client'



import React from 'react'
import "./About.scss"
import { Vidaloka } from 'next/font/google'
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
})


function About() {
  
  const { t } = useTranslation();

  return (
    <section className={vidaloka.className} id='About' >
      <div className='about-text'>{t("about_text")}</div>
    </section>
  )
}

export default About

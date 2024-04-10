import React from 'react'
import "./About.scss"
import { Vidaloka } from 'next/font/google'


const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
})


function About() {
  
  return (
    <section className={vidaloka.className} id='About' >
      <div className='about-text'> Elite Group was founded in 2024 with the aim of importing, packaging and distributing legumes and pulses.
The activities of this collection are being carried out continuously in order to grow
and raise the quality level of the food basket of families with more than ten food
products and using the latest technologies.
This effort continues to collect suitable products from farms all over the world
every day and present them to consumers because consumer satisfaction has
always been and still is its main policy.
The first-class quality of products and the
unique taste and cooking of elite products
are unique features that have turned our
consumers into loyal and permanent customers.

 The research and development unit and elite group experts are always
investigating and researching the global markets in order to prepare and supply
products that conform to global standards.
The vision of Elite Group is to increase the share of domestic and foreign markets, develop and strengthen the supply chain of goods and products and their marketing with a focus on introducing the Elite brand inside and
outside the country. </div>
    </section>
  )
}

export default About

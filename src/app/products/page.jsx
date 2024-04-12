'use client'


import React from 'react'
import Image from 'next/image' 
import { Vidaloka } from 'next/font/google'
import { ProductsStore } from '../productsStore'


const vidaloka = Vidaloka({
    weight: '400',
    subsets: ['latin'],
  })
  

function Products() {
  return (
    <section className={vidaloka.className} id='Products' >
      {ProductsStore.map((item) => {
        return <div className='productCards' key={item.id} >
             <Image
      src={item.image}
      width={350}
      height={350}
      alt={item.name}
    /> 
    <h1>{item.name}</h1>
    <p>{item.desc}</p>
        </div>
      })}
    </section>
  )
}

export default Products

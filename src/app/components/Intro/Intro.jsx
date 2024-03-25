import './Intro.scss'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

 
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

function Intro() {
  return (
    <section>
        <div className='introLeft' ><Image
      src="/introPic.JPG"
      width={400}
      height={400}
      alt="Intro Image"
    /></div>
        <div className='introRight' >
            <div className='title' ><h1>Elite Food <br /> & Beverage</h1>
            <button type='button' >Bulk Order</button></div>
            
            <div className='introBar' >
                <h2>Best Sellers</h2>
        <div className='bestSellers' ><Image
      src="/bs1.png"
      width={150}
      height={150}
      alt="Intro Image"
    /></div>
        <div className='bestSellers' ><Image
      src="/bs2.png"
      width={150}
      height={150}
      alt="Intro Image"
    /></div>
        <div className='bestSellers' ><Image
      src="/bs3.png"
      width={150}
      height={150}
      alt="Intro Image"
    /></div>
        <div className='bestSellers' ><Image
      src="/bs4.png"
      width={150}
      height={150}
      alt="Intro Image"
    /></div>
     </div>
        </div>
     
    </section>
  )
}

export default Intro

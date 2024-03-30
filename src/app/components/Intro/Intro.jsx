import './Intro.scss'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { FaArrowRightLong } from "react-icons/fa6";

 
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
          <div className='introRightMain' ><div className='title' ><h1>Elite Food & Beverage</h1>
            <button type='button' >Bulk Order</button></div></div>
            
            
            <div className='introBar' >
                <h2>Best Sellers</h2>
        <div className='bestSellers' ><Image
      src="/badum.jpg"
      width={120}
      height={120}
      alt="Intro Image"
    /> 
    <p>Roasted Almond</p>
     </div>
        <div className='bestSellers' ><Image
      src="/chiti.jpg"
      width={120}
      height={120}
      alt="Intro Image"
    /> 
    <p>White Kidney Beans</p>
     </div>
        <div className='bestSellers' ><Image
      src="/ghermez.jpg"
      width={120}
      height={120}
      alt="Intro Image"
    /> 
    <p>Red Kidney Beans</p>
     </div>
        <div className='bestSellers' ><Image
      src="/nokhod.jpg"
      width={120}
      height={120}
      alt="Intro Image"
    /> 
    <p>Chick Peas</p>
     </div>
     <FaArrowRightLong />
     </div>
        </div>
     
    </section>
  )
}

export default Intro

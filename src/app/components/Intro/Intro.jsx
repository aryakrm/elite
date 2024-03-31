import './Intro.scss'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { FaArrowRightLong } from "react-icons/fa6";
import chi from "../../../../public/static/images/chiti.JPG"
import ghermez from "../../../../public/static/images/ghermez.JPG"
import nokhod from "../../../../public/static/images/nokhod.JPG"

 
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

function Intro() {
  return (
    <section>
        <div className='introLeft' ><Image
      src="/static/images/introPic.JPG"
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
      src="/static/images/badum.JPG"
      width={120}
      height={120}
      alt="ba"
    /> 
    <p>Roasted Almond</p>
     </div>
        <div className='bestSellers' ><Image
      src={chi}
      width={120}
      height={120}
      alt="chi"
    /> 
    <p>White Kidney Beans</p>
     </div>
        <div className='bestSellers' ><Image
      src={ghermez}
      width={120}
      height={120}
      alt="gherm"
    /> 
    <p>Red Kidney Beans</p>
     </div>
        <div className='bestSellers' ><Image
      src={nokhod}
      width={120}
      height={120}
      alt="nokh"
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

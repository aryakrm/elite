import React from 'react';
import "./Sec5.scss"
import Image from 'next/image'
import shareEx from "../../../../public/static/images/shareEx.JPG"
import { PiCookingPotBold } from "react-icons/pi";



function Sec5() {


  return (
    <section className="Sec5-container" >
      <div className='Sec5' >
      <PiCookingPotBold />
      <h1>
        Share your cooking experience with us!
      </h1>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" />
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <textarea name="message" id="message" cols="35" rows="10" placeholder='Your Experience' ></textarea>
        <button type='submit' > Submit </button>
      </form>
      <p>
      After you have used Elite products and experienced the delicious taste of food with Elite, you can leave us a comment and share your pleasure with us.
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

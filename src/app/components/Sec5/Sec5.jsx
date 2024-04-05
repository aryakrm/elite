import React from 'react';
import "./Sec5.scss"



function Sec5() {


  return (
    <section className="Sec5" >
      <h1>
        Share your cooking experience with us!
      </h1>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" />
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type='submit' > Submit </button>
      </form>
    </section>
  )
}

export default Sec5

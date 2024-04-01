import React from 'react';
import "./Sec5.scss"
import EmailForm from '../EmailForm/EmailForm';
/* import dynamic from 'next/dynamic';

const DynamicEmailForm = dynamic(() => import('../EmailForm/EmailForm'), { ssr: false }); */

function Sec5() {
  return (
    <section className="Sec5" >
      <h1>
        Share your cooking experience with us!
      </h1>
      {/* <DynamicEmailForm /> */}
      <EmailForm/>
    </section>
  )
}

export default Sec5

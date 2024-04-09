import React from 'react'
import './Sec7.scss'
import Image from 'next/image'
import adas from "../../../../public/static/images/adas.jpeg"
import bolboli from "../../../../public/static/images/bolboli.jpeg"
import peste from "../../../../public/static/images/peste.jpeg"
import { GiPlantSeed } from "react-icons/gi";


function Sec7() {
  return (
    <section className='Sec7' >
        <GiPlantSeed />
      <h1>Fully Organic Elite</h1>
        <div className="cards" >
            <div>
            <Image
      src={peste}
      width={250}
      height={250}
      alt="pste"
    /> 
    <p>Pistachio</p>
    <p>Pistachios may be good for someone’s health as they are source of protein, antioxidants, and fiber. Possible benefits include boosting heart health, managing blood sugar, and reducing colon cancer risk.</p>
            </div>
            <div>
            <Image
      src={adas}
      width={250}
      height={250}
      alt="adas"
    /> 
    <p>Lentil</p>
    <p>Lentils add essential vitamins, minerals, and fiber to the diet. They also provide protein and are an excellent replacement for meat in meals.</p>
            </div>
            <div>
            <Image
      src={bolboli}
      width={250}
      height={250}
      alt="bolboli"
    /> 
    <p>Black-Eyed Peas</p>
    <p>Black-eyed peas are highly nutritious and associated with many impressive health benefits. In particular, they may help support weight loss, improve heart health, and promote digestive health.</p>
            </div>
        </div>
    </section>
  )
}

export default Sec7

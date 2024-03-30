import "./Sec3.scss"
import Image from 'next/image' 

function Sec3() {
  return (
    <section className="Sec3">
        <h1>Live Healthy</h1>
      <div className="up" >
        <div className="upLeft">
        <Image
      src="/upLeft.jpg"
      width={350}
      height={500}
      alt="Intro Image"
    /> 
        </div>
        <div className="upRight">
            <h2>Everyday With Us For Meal</h2>
            <p>If you want to have a healthy lifestyle, use elite miracle seeds in your cooking every day.</p>
            <div><Image
      src="/upRight1.jpg"
      width={300}
      height={250}
      alt="Intro Image"
    />
    <Image
      src="/upRight2.jpg"
      width={300}
      height={250}
      alt="Intro Image"
    />  
    </div>
            
        </div>
      </div>
      <div className="down" >
        <div className="downLeft">
        <h2>Everyday With Us For Energy</h2>
        <p>If Elite Energizing Seeds are always and everywhere with you, you can claim to make the impossible possible.</p>
        <div><Image
      src="/downLeft1.jpg"
      width={300}
      height={250}
      alt="Intro Image"
    />
    <Image
      src="/downLeft2.jpg"
      width={300}
      height={250}
      alt="Intro Image"
    />  </div>
        </div>
        <div className="downRight">
        <Image
      src="/downRight.jpg"
      width={350}
      height={500}
      alt="Intro Image"
    /> 
        </div>
      </div>
    </section>
  )
}

export default Sec3

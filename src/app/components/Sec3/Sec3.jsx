import "./Sec3.scss"
import Image from 'next/image' 

function Sec3() {
  return (
    <section className="Sec3">
        <h1>Live Healthy</h1>
      <div className="up" >
        <div className="upLeft">
        <Image
      src="/static/images/upLeft.jpg"
      width={350}
      height={500}
      alt="upL"
    /> 
        </div>
        <div className="upRight">
            <h2>Everyday With Us For Meal</h2>
            <p>If you want to have a healthy lifestyle, use elite miracle seeds in your cooking every day.</p>
            <div><Image
      src="/static/images/upRight1.jpg"
      width={300}
      height={250}
      alt="upR"
    />
    <Image
      src="/static/images/upRight2.jpg"
      width={300}
      height={250}
      alt="upR2"
    />  
    </div>
            
        </div>
      </div>
      <div className="down" >
        <div className="downLeft">
        <h2>Everyday With Us For Energy</h2>
        <p>If Elite Energizing Seeds are always and everywhere with you, you can claim to make the impossible possible.</p>
        <div><Image
      src="/static/images/downLeft1.jpg"
      width={300}
      height={250}
      alt="dole"
    />
    <Image
      src="/static/images/downLeft2.jpg"
      width={300}
      height={250}
      alt="dole2"
    />  </div>
        </div>
        <div className="downRight">
        <Image
      src="/static/images/downRight.jpg"
      width={350}
      height={500}
      alt="dori"
    /> 
        </div>
      </div>
    </section>
  )
}

export default Sec3

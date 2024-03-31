import "./Sec3.scss"
import Image from 'next/image' 
import upLeft from "../../../../public/static/images/upLeft.JPG"
import upRight1 from "../../../../public/static/images/upRight1.JPG"
import upRight2 from "../../../../public/static/images/upRight2.JPG"
import downLeft1 from "../../../../public/static/images/downLeft1.JPG"
import downLeft2 from "../../../../public/static/images/downLeft2.JPG"
import downRight from "../../../../public/static/images/downRight.JPG"

function Sec3() {
  return (
    <section className="Sec3">
        <h1>Live Healthy</h1>
      <div className="up" >
        <div className="upLeft">
        <Image
      src={upLeft}
      width={350}
      height={500}
      alt="upL"
    /> 
        </div>
        <div className="upRight">
            <h2>Everyday With Us For Meal</h2>
            <p>If you want to have a healthy lifestyle, use elite miracle seeds in your cooking every day.</p>
            <div><Image
      src={upRight1}
      width={300}
      height={250}
      alt="upR"
    />
    <Image
      src={upRight2}
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
      src={downLeft1}
      width={300}
      height={250}
      alt="dole"
    />
    <Image
      src={downLeft2}
      width={300}
      height={250}
      alt="dole2"
    />  </div>
        </div>
        <div className="downRight">
        <Image
      src={downRight}
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

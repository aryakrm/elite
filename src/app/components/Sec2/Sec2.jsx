import "./Sec2.scss"
import Image from 'next/image'
import nokhodlu from "../../../../public/static/images/nokhodlu.JPG"
import sefidli from "../../../../public/static/images/sefidli.JPG"
import lepeli from "../../../../public/static/images/lepeli.JPG"
import { GiPlantRoots } from "react-icons/gi";


function Sec2() {
  return (
    <section className="Sec2" >
      <GiPlantRoots />
        <h1>Our Favorite Organics</h1>
        <p>PRODUCTS THAT OUR COSTUMERS ENJOY</p>
        <div className="cards" >
            <div>
            <Image
      src={nokhodlu}
      width={250}
      height={250}
      alt="no"
    /> 
    <p>Roasted Broccoli Chickpeas</p>
    <p>Contains vitamins A,B,E</p>
            </div>
            <div>
            <Image
      src={sefidli}
      width={250}
      height={250}
      alt="sef"
    /> 
    <p>Hearty Tuscan White Bean Soup</p>
    <p>Contains vitamins B,K,E</p>
            </div>
            <div>
            <Image
      src={lepeli}
      width={250}
      height={250}
      alt="lep"
    /> 
    <p>Lemon Balsamic Lentil Salad</p>
    <p>Contains vitamins B1,B2,B3</p>
            </div>
        </div>
      
    </section>
  )
}

export default Sec2

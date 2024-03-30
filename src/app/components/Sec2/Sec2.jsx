import "./Sec2.scss"
import Image from 'next/image'

function Sec2() {
  return (
    <section className="Sec2" >
        <h1>Our Favorite Organics</h1>
        <p>PRODUCTS THAT OUR COSTUMERS ENJOY</p>
        <div className="cards" >
            <div>
            <Image
      src="/nokhodlu.jpg"
      width={250}
      height={250}
      alt="no"
    /> 
    <p>Roasted Broccoli Chickpeas</p>
            </div>
            <div>
            <Image
      src="/sefidli.jpg"
      width={250}
      height={250}
      alt="sef"
    /> 
    <p>Hearty Tuscan White Bean Soup</p>
            </div>
            <div>
            <Image
      src="/lepeli.jpg"
      width={250}
      height={250}
      alt="lep"
    /> 
    <p>Lemon Balsamic Lentil Salad</p>
            </div>
        </div>
      
    </section>
  )
}

export default Sec2

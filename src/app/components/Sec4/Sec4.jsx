import "./Sec4.scss"
import Image from "next/image"
import process1 from "../../../../public/static/images/process1.png"

function Sec4() {
  return (
    <section className="Sec4">
      <h1>Our Process</h1>
      <h2>World Class Service</h2>
      <div className="cards">
        <div>
        <Image
      src={process1}
      width={350}
      height={350}
      alt="process1"
    /> 
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Sec4

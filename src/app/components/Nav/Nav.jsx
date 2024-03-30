import './Nav.scss'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";



function Nav() {
  return (
    <nav>
         <Link href='/'><h1>ELITE's LOGO</h1></Link>
        <ul>
            <li><Link href='/' > <FaHome /> Home</Link></li>
            <li><Link href='/' > <FaInfo /> About</Link></li>
            <li><Link href='/' > <MdOutlineProductionQuantityLimits />  Products</Link></li>
            <li><Link href='/' > <IoIosContacts /> Contact Us</Link></li>
        </ul>
        <div className='languages' >
        <span class="fi fi-gb"></span>
        <span class="fi fi-ae"></span>
        </div>
        
    </nav>
  )
}

export default Nav

import React from 'react'
import './Footer.scss'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <ul className='menu' >
            <li><Link href='/' > <FaHome /> Home</Link></li>
            <li><Link href='/' > <FaInfo /> About</Link></li>
            <li><Link href='/' > <MdOutlineProductionQuantityLimits />  Products</Link></li>
            <li><Link href='/' > <IoIosContacts /> Contact Us</Link></li>
        </ul>
        <sub>Arya Karimi Copyright@ All Rights are Reserved By Elite Co.</sub>
    </footer>
  )
}

export default Footer

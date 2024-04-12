'use client'

import React, {useState} from 'react'
import './Nav.scss'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";



function Nav() {


  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };
  

  return (
    <nav>
         <Link href='/'><h1>ELITE's LOGO</h1></Link>
        <ul>
            <li><Link href='/' > <FaHome /> Home</Link></li>
            <li><Link href='/about' > <FaInfo /> About</Link></li>
            <li><Link href='/' > <MdOutlineProductionQuantityLimits />  Products</Link></li>
            <li><Link href='/contact' > <IoIosContacts /> Contact Us</Link></li>
        </ul>
        {active ? (
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="side-menu"
            onClick={() => setActive(!active)}
          >
            <ul className="side-menu-list">
            <li><Link href='/' > <FaHome /> Home</Link></li>
            <li><Link href='/about' > <FaInfo /> About</Link></li>
            <li><Link href='/' > <MdOutlineProductionQuantityLimits />  Products</Link></li>
            <li><Link href='/contact' > <IoIosContacts /> Contact Us</Link></li>
            </ul>
          </motion.div>
        ) : null}
        <div className='languages' >
        <span class="fi fi-gb"></span>
        <span class="fi fi-ae"></span>
        </div>
        <div onClick={menuTogglerHandler} className="hamburger">
          {active ? (
            <AiOutlineClose className="_icon" />
          ) : (
            <GiHamburgerMenu className="_icon" />
          )}
        </div>
        
    </nav>
  )
}

export default Nav

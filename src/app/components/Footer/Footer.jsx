'use client'



import React from 'react'
import './Footer.scss'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  return (
    <footer>
      <ul className='menu' >
            <li><Link href='/' > <FaHome /> {t("Home")}</Link></li>
            <li><Link href='/about' > <FaInfo /> {t("About")}</Link></li>
            <li><Link href='/products' > <MdOutlineProductionQuantityLimits /> {t("Products")}</Link></li>
            <li><Link href='/contact' > <IoIosContacts /> {t("Contact")}</Link></li>
        </ul>
        <sub>Arya Karimi Copyright@ All Rights are Reserved By Elite Co.</sub>
    </footer>
  )
}

export default Footer

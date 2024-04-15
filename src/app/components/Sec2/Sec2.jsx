'use client'

import "./Sec2.scss"
import Image from 'next/image'
import nokhodlu from "../../../../public/static/images/nokhodlu.JPG"
import sefidli from "../../../../public/static/images/sefidli.JPG"
import lepeli from "../../../../public/static/images/lepeli.JPG"
import { GiPlantRoots } from "react-icons/gi";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Sec2() {

  const { t } = useTranslation();

  return (
    <section className="Sec2" >
      <GiPlantRoots />
        <h1>{t("Sec2_title")}</h1>
        <p>{t("Sec2_title")}</p>
        <div className="cards" >
            <div>
            <Image
      src={nokhodlu}
      width={250}
      height={250}
      alt="no"
    /> 
    <p>{t("broccoli")}</p>
    <p>{t("broccoli_vitamin")}</p>
            </div>
            <div>
            <Image
      src={sefidli}
      width={250}
      height={250}
      alt="sef"
    /> 
    <p>{t("soup")}</p>
    <p>{t("soup_vitamin")}</p>
            </div>
            <div>
            <Image
      src={lepeli}
      width={250}
      height={250}
      alt="lep"
    /> 
    <p>{t("salad")}</p>
    <p>{t("salad_vitamin")}</p>
            </div>
        </div>
      
    </section>
  )
}

export default Sec2

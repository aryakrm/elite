'use client'


import "./Sec4.scss"
import Image from "next/image"
import process1 from "../../../../public/static/images/process1.png"
import process2 from "../../../../public/static/images/process2.png"
import process3 from "../../../../public/static/images/process3.png"
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { MdFactory } from "react-icons/md";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Sec4() {

  const { t } = useTranslation();

  return (
    <section className="Sec4">
      <MdFactory />
      <h1>{t("process_title")}</h1>
      <h2>{t("process_slogan")}</h2>
      <div className="cards">
        <div>
        <Image
      src={process1}
      width={300}
      height={300}
      alt="process1"
    /> 
        </div>
        <TbArrowBigRightLinesFilled />
        <div>
        <Image
      src={process2}
      width={250}
      height={250}
      alt="process2"
    /> 
        </div>
        <TbArrowBigRightLinesFilled />
        <div>
        <Image
      src={process3}
      width={250}
      height={250}
      alt="process3"
    /> 
        </div>
      </div>
    </section>
  )
}

export default Sec4

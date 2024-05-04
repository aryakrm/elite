"use client";

import "./Intro.scss";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import almond from "../../../../public/static/images/products/almond.jpeg";
import blackEyed from "../../../../public/static/images/products/blackEyed.jpeg";
import cashew from "../../../../public/static/images/products/cashew.jpeg";
import chickPeas from "../../../../public/static/images/products/chickPeas.jpeg";
import lentils from "../../../../public/static/images/products/lentils.jpeg";
import matterDal from "../../../../public/static/images/products/materDal.jpg";
import pistachio from "../../../../public/static/images/products/pistachio.jpeg";
import popcorn from "../../../../public/static/images/products/popcorn.jpeg";
import rBean from "../../../../public/static/images/products/rBean.jpeg";
import wBean from "../../../../public/static/images/products/wBean.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Intro() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const { t } = useTranslation();

  return (
    <section className="Intro">
      <div className="introLeft">
        <Image
          src="/static/images/introPic.JPG"
          width={450}
          height={400}
          alt="Intro Image"
        />
      </div>
      <div className="introRight">
        <div className="introRightMain">
          <div className="title">
            <h1>{t("intro_title")} </h1>
            <h2>{t("intro_slogan")}</h2>
            <Link href="/products">
              <button type="button">{t("bulk_order")}</button>
            </Link>{" "}
          </div>
        </div>
        <div className="introBar">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <Image src={almond} width={150} height={150} alt="nesto" />
                <p>{t("almond")}</p>
              </div>
              <div className="embla__slide">
                <Image src={blackEyed} width={150} height={150} alt="almaya" />
                <p>{t("black_eyed")}</p>
              </div>
              <div className="embla__slide">
                <Image src={cashew} width={150} height={150} alt="aswaaq" />
                <p>{t("salted_cashew")}</p>
              </div>
              <div className="embla__slide">
                <Image
                  src={chickPeas}
                  width={150}
                  height={150}
                  alt="carrefour"
                />
                <p>{t("chick")}</p>
              </div>
              <div className="embla__slide">
                <Image src={lentils} width={150} height={150} alt="lulu" />
                <p>{t("lentil")}</p>
              </div>
              <div className="embla__slide">
                <Image src={matterDal} width={150} height={150} alt="viva" />
                <p>{t("dal")}</p>
              </div>

              <div className="embla__slide">
                <Image src={pistachio} width={150} height={150} alt="uc" />
                <p>{t("pistachio")}</p>
              </div>

              <div className="embla__slide">
                <Image src={popcorn} width={150} height={150} alt="westzone" />
                <p>{t("popcorn")}</p>
              </div>
              <div className="embla__slide">
                <Image src={rBean} width={150} height={150} alt="westzone" />
                <p>{t("rBean")}</p>
              </div>
              <div className="embla__slide">
                <Image src={wBean} width={150} height={150} alt="westzone" />
                <p>{t("wBean")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

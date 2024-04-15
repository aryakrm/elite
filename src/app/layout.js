import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from "./components/Footer/Footer";
import "./i18n.js";
import Image from 'next/image'
import whatsappLogo from '../../public/static/images/whatsapp.png'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elite Food & Beverage",
  description: "Elite Food & Beverage's Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children} 
        <Link href="https://wa.me/971504036780" >
        <Image
      src={whatsappLogo}
      width={70}
      height={70}
      alt="whatsappLogo"
      className="wpLogo"
    />
        </Link>
         
        <Footer/>
        </body>
    </html>
  );
}

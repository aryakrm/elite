import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
        </body>
    </html>
  );
}

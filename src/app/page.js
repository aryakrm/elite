import Intro from "./components/Intro/Intro";
import Sec2 from "./components/Sec2/Sec2";
import Sec3 from "./components/Sec3/Sec3";
import Sec4 from "./components/Sec4/Sec4";
import { Vidaloka } from 'next/font/google'
import Sec5 from "./components/Sec5/Sec5";

 
const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={vidaloka.className}>
      <Intro/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Sec5/>
    </main>
  );
}

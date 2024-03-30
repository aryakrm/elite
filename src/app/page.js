import Intro from "./components/Intro/Intro";
import Sec2 from "./components/Sec2/Sec2";
import Sec3 from "./components/Sec3/Sec3";
import Sec4 from "./components/Sec4/Sec4";
import styles from "./page.module.scss";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <Intro/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
    </main>
  );
}

import Intro from "./components/Intro/Intro";
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
    </main>
  );
}

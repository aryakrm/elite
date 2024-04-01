import './Header.scss'
import Nav from "../Nav/Nav"
import { Vidaloka } from 'next/font/google'

 
const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
})

function Header() {
  return (
    <header className={vidaloka.className}>
      <Nav/>
    </header>
  )
}

export default Header

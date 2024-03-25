import './Header.scss'
import Nav from "../Nav/Nav"
import { Roboto } from 'next/font/google'

 
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

function Header() {
  return (
    <header className={roboto.className}>
      <Nav/>
    </header>
  )
}

export default Header

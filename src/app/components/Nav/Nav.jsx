import './Nav.scss'
import Link from 'next/link'

function Nav() {
  return (
    <nav>
         <Link href='/'><h1>ELITE's LOGO</h1></Link>
        <ul>
            <li><Link href='/' >Home</Link></li>
            <li><Link href='/' >About</Link></li>
            <li><Link href='/' >Products</Link></li>
            <li><Link href='/' >Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Nav

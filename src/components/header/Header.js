import { useState } from 'react'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import { NavbarItem } from '../navbar-item/NavbarItem'
import s from './Header.module.scss'

export const Header = ({ navbarLinks }) => {
  const [navbar, setNavbar] = useState(false)

  const changeBacground = () => {
    if (window.scrollY >= 590) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBacground)

  const navBg = navbar ? s.active : s.header__navbar

  return (
    <header className="container">
      <nav className={navBg}>
        <a href="#home" className={s.header__navbar_logo}>
          <div className={s.header__navbar_logo_img}>
            <SvgSelector id="logo" />
          </div>
          <span>Finance</span>Ledger
        </a>

        <ul className={s.header__navbar_list}>
          {navbarLinks.map((item) => (
            <NavbarItem item={item} key={item.title} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

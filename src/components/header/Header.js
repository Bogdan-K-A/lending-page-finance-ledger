import { useState } from 'react'
import { Link } from 'react-scroll'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import { NavbarItem } from './navbar-item/NavbarItem'
import s from './Header.module.scss'

export const Header = ({ navbarLinks }) => {
  const [navbar, setNavbar] = useState(false)

  const changeBacground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBacground)

  const navBg = navbar ? s.active : s.header__navbar

  return (
    <header className={s.header}>
      <nav className={navBg}>
        <div className={s.nav_container}>
          <Link
            to={'home'}
            smooth={true}
            offset={-70}
            duration={500}
            className={s.header__navbar_logo}
          >
            <span className={s.header__navbar_logo_img}>
              <SvgSelector id="logo" />
            </span>
            <span>Finance</span>Ledger
          </Link>

          <ul className={s.header__navbar_list}>
            {navbarLinks.map((item) => (
              <NavbarItem item={item} key={item.title} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

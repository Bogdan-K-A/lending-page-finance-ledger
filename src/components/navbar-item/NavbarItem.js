import React from 'react'
import { Link } from 'react-scroll'
import s from './NavbarItem.module.scss'

export const NavbarItem = ({ item }) => {
  return (
    <>
      <li className={s.header__navbar_item}>
        <Link
          to={item.url}
          smooth={true}
          offset={-70}
          duration={500}
          className={s.header__navbar_link}
        >
          {item.title}
        </Link>
      </li>
    </>
  )
}

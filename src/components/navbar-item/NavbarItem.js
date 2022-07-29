import React from 'react'
import s from './NavbarItem.module.scss'

export const NavbarItem = ({ item }) => {
  return (
    <>
      <li className={s.header__navbar_item}>
        <a href={item.url} className={s.header__navbar_link}>
          {item.title}
        </a>
      </li>
    </>
  )
}

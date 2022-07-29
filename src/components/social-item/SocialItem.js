import React from 'react'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import s from './SocialItem.module.scss'

export const SocialItem = ({ item }) => {
  return (
    <li className={s.footer__icon_item}>
      <a href={item.href} target="_blank" className={s.footer__svg}>
        <SvgSelector id={item.icon_id} />
      </a>
    </li>
  )
}

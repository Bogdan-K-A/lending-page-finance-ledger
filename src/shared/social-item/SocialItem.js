import React from 'react'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import s from './SocialItem.module.scss'

export const SocialItem = ({ item, type }) => {
  const iconsStyleByType = type === 'footer' ? s.footer__svg : s.team__svg

  return (
    <li className={s.footer__icon_item}>
      <a href={item.href} target="_blank" className={iconsStyleByType}>
        <SvgSelector id={item.icon_id} />
      </a>
    </li>
  )
}

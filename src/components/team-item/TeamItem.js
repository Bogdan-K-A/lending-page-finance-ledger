import React from 'react'
import { SocialItem } from '../social-item/SocialItem'
import socialIconsArr from '../../assets/icons/social-icons-arr/socialIconsArr'

import s from './TeamItem.module.scss'

export const TeamItem = ({ item }) => {
  return (
    <li className={s.team__item}>
      <div className={s.team__overlay_box}>
        <ul className={s.team__icon_list}>
          {socialIconsArr.map((item) => (
            <SocialItem item={item} key={item.icon_id} />
          ))}
        </ul>
      </div>
      <picture>
        <source
          srcSet={`${item.webp_1x} 1x, ${item.webp_2x} 2x`}
          media="(minWidth: 1360px)"
        />
        <source
          srcSet={`${item.jpg_1x} 1x, ${item.jpg_2x} 2x`}
          media="(minWidth: 1360px)"
        />

        <img
          src={`${item.webp_1x}`}
          alt={item.alt}
          className={s.team__item_img}
        />
      </picture>
      <p className={s.team__name}>{item.name}</p>
      <p className={s.team__plase}>{item.plase}</p>
    </li>
  )
}

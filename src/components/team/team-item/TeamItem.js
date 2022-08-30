import React from 'react'
import { SocialItem } from '../../../shared/social-item/SocialItem'
import socialIconsArr from '../../../assets/icons/social-icons-arr/socialIconsArr'

import s from './TeamItem.module.scss'

export const TeamItem = ({ item }) => {
  return (
    <li className={s.team__item}>
      <div className={s.team__thumb}>
        <img
          srcSet={`${item.mobail} 767w,${item.tablet} 1359w,${item.desctop} 1360w,`}
          sizes="100vw"
          src={`${item.desctop}`}
          alt={item.alt}
          className={s.img}
        />
        <ul className={s.team__icon_list}>
          {socialIconsArr.map((item) => (
            <SocialItem item={item} key={item.icon_id} />
          ))}
        </ul>
      </div>

      <div className={s.team__item_content}>
        <p className={s.team__name}>{item.name}</p>
        <p className={s.team__plase}>{item.plase}</p>
      </div>
    </li>
  )
}

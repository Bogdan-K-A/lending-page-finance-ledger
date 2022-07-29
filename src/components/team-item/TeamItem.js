import React from 'react'
import s from './TeamItem.module.scss'

export const TeamItem = ({ item }) => {
  return (
    <li className={s.team__item}>
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

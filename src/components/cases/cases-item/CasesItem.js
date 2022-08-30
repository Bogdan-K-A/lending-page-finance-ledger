import React from 'react'
import s from './CasesItem.module.scss'

export const CasesItem = ({ item, onClickImg }) => {
  return (
    <li
      className={s.cases_item}
      onClick={() => {
        onClickImg(item)
      }}
    >
      <picture>
        <source
          srcSet={`${item.webp_1x} 1x, ${item.webp_2x} 2x`}
          media="(minWidth: 1360px)"
        />
        <source
          srcSet={`${item.jpg_1x} 1x, ${item.jpg_2x} 2x`}
          media="(minWidth: 1360px)"
        />

        <img src={`${item.webp_1x}`} alt={item.alt} />
      </picture>
    </li>
  )
}

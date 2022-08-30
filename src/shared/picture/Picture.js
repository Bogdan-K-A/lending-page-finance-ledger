import React from 'react'
import s from './Picture.module.scss'

export const Picture = ({ item }) => {
  return (
    <>
      <img
        srcSet={`${item.mobail} 767w,${item.tablet} 1359w,${item.desctop} 1360w,`}
        sizes=" 100vw"
        src={`${item.desctop}`}
        alt={item.alt}
        className={s.img}
      />
    </>
  )
}

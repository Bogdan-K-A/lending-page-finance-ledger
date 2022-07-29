import React from 'react'
import { Button } from '../button'
import s from './About.module.scss'

export const About = ({ item }) => {
  return (
    <>
      <picture id="about">
        <source
          srcSet={`${item.webp_1x} 1x, ${item.webp_2x} 2x`}
          media="(minWidth: 1360px)"
        />
        <source
          srcSet={`${item.jpg_1x} 1x, ${item.jpg_2x} 2x`}
          media="(minWidth: 1360px)"
        />

        <img src={`${item.webp_1x}`} alt={item.alt} className={s.about__img} />
      </picture>
      <div className={s.about__content}>
        <p className={s.about__text}>What you are looking for</p>
        <h2 className={s.about__title}>We provide bespoke solutions</h2>
        <p className={s.about__description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>

        <Button type="secondary-green">Read More</Button>
      </div>
    </>
  )
}

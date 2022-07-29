import React from 'react'
import { Button } from '../button'
import s from './Blog.module.scss'

export const Blog = ({ item }) => {
  return (
    <>
      <div className={s.blog__content}>
        <p className={s.blog__text}>April 16 2020</p>
        <h2 className={s.blog__title}>Blog Post One</h2>
        <p className={s.blog__description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>

        <Button type="secondary-blue">Read Our Blog</Button>
      </div>
      <picture id="blog">
        <source
          srcSet={`${item.webp_1x} 1x, ${item.webp_2x} 2x`}
          media="(minWidth: 1360px)"
        />
        <source
          srcSet={`${item.jpg_1x} 1x, ${item.jpg_2x} 2x`}
          media="(minWidth: 1360px)"
        />

        <img src={`${item.webp_1x}`} alt={item.alt} className={s.blog__img} />
      </picture>
    </>
  )
}

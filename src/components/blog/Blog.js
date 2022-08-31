import React from 'react'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import { Button } from '../../shared/button'
import { Picture } from '../../shared/picture/Picture'
import { Container } from '../../shared/container/Container'

import s from './Blog.module.scss'

export const Blog = ({ item }) => {
  return (
    <Container>
      <div className={s.blog} id={'blog'}>
        <div className={s.blog__content}>
          <p className={s.blog__text}>April 16 2020</p>
          <h2 className={s.blog__title}>Blog Post One</h2>
          <p className={s.blog__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>

          <Button type="secondary-blue">
            <SvgSelector id="angle-right" />
            <span>Read Our Blog</span>
          </Button>
        </div>
        <Picture item={item} />
      </div>
    </Container>
  )
}

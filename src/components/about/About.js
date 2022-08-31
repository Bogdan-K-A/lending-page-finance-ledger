import React from 'react'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import { Button } from '../../shared/button/Button'
import { Picture } from '../../shared/picture/Picture'
import { Container } from '../../shared/container/Container'
import s from './About.module.scss'

export const About = ({ item }) => {
  return (
    <Container>
      <div className={s.about} id={'about'}>
        <Picture item={item} />

        <div className={s.about__content}>
          <p className={s.about__text}>What you are looking for</p>
          <h2 className={s.about__title}>We provide bespoke solutions</h2>
          <p className={s.about__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>

          <Button type="secondary-green">
            <SvgSelector id="angle-right" />
            <span>Read More</span>
          </Button>
        </div>
      </div>
    </Container>
  )
}

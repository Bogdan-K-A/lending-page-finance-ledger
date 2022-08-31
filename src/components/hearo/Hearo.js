import React from 'react'
import { Button } from '../../shared/button/Button'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'
import s from './Hearo.module.scss'
import { Container } from '../../shared/container/Container'

export const Hearo = () => {
  return (
    <section className={s.hearo} id="home">
      <Container>
        <div className={s.hearo__title_wrapper}>
          <h1 className={s.hearo__title}>The Sky Is The Limit</h1>
          <span className={s.hearo__text}>
            We provide world class financial assistance
          </span>
          <Button type="primary">
            <SvgSelector id="angle-right" />
            <span>Read More</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}

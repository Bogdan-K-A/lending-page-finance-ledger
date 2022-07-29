import React from 'react'
import { Button } from '../button/Button'
// import { CgChevronRight } from 'react-icons/cg'
import s from './Hearo.module.scss'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'

export const Hearo = () => {
  return (
    <section className={s.hero} id="home">
      <div className={s.hearo__title_wrapper}>
        <h1 className={s.hero__title}>The Sky Is The Limit</h1>
        <span className={s.hero__text}>
          We provide world class financial assistance
        </span>
        <Button type="primary">
          <SvgSelector id="angle-right" />
          <span>Read More</span>
        </Button>
      </div>
    </section>
  )
}

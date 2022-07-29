import React from 'react'
import { CasesItem } from '../cases-item/CasesItem'
import s from './Cases.module.scss'

export const Cases = ({ items }) => {
  return (
    <section id="cases" className={s.cases}>
      <div className={s.cases__content}>
        <p className={s.cases__text}>This is what we do</p>
        <h2 className={s.cases__title}>Business Cases</h2>
        <p className={s.cases__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className={s.cases__list}>
        {items.map((item) => (
          <CasesItem
            item={item}
            key={item.id}
            onClick={() => console.log('Открыть модалку')}
          />
        ))}
      </ul>
    </section>
  )
}

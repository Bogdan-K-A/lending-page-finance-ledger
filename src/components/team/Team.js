import React from 'react'
import { TeamItem } from '../team-item/TeamItem'
import s from './Team.module.scss'

export const Team = ({ items }) => {
  return (
    <section id="team" className={s.team}>
      <div className={s.team__content}>
        <p className={s.team__text}>Who we are</p>
        <h2 className={s.team__title}>Our Professional Team</h2>
        <p className={s.team__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className={s.team__list}>
        {items.map((item) => (
          <TeamItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}

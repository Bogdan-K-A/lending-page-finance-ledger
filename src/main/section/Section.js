import React from 'react'
import { About } from '../../components/about/About'
import { Blog } from '../../components/blog/Blog'
import { Contact } from '../../components/contact/Contact'
import { Container } from '../../shared/container/Container'

import s from './Section.module.scss'

export const Section = ({ imgesUrl, id, type }) => {
  return (
    <section className={s.section}>
      {imgesUrl.map((item) => {
        if (item.id === id && type === 'green') {
          return <About key={item.id} item={item} />
        } else if (item.id === id && type === 'blue') {
          return <Blog key={item.id} item={item} />
        } else if (item.id === id && type === 'contact') {
          return <Contact key={item.id} item={item} />
        }
      })}
    </section>
  )
}

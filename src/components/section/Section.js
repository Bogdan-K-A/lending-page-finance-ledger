import React from 'react'
import { About } from '../about/About'
import { Blog } from '../blog/Blog'
import { Contact } from '../contact/Contact'

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

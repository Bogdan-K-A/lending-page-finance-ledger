import { About } from '../../components/about/About'
import { Blog } from '../../components/blog/Blog'
import { Contact } from '../../components/contact/Contact'

import s from './Section.module.scss'

export const Section = ({ imgesUrl, id, type }) => {
  return (
    <>
      {imgesUrl.map((item) => {
        if (item.id === id && type === 'green') {
          return (
            <section className={s.section_bottom_padding}>
              <About key={item.id} item={item} />
            </section>
          )
        } else if (item.id === id && type === 'blue') {
          return (
            <section className={s.section}>
              <Blog key={item.id} item={item} />
            </section>
          )
        } else if (item.id === id && type === 'contact') {
          return (
            <section className={s.section_top_padding}>
              <Contact key={item.id} item={item} />
            </section>
          )
        }
      })}
    </>
  )
}

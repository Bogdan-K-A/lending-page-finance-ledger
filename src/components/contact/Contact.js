import React from 'react'
import { Form } from '../form/Form'
import s from './Contact.module.scss'

export const Contact = ({ item }) => {
  return (
    <>
      <picture id="contact">
        <source
          srcSet={`${item.webp_1x} 1x, ${item.webp_2x} 2x`}
          media="(minWidth: 1360px)"
        />
        <source
          srcSet={`${item.jpg_1x} 1x, ${item.jpg_2x} 2x`}
          media="(minWidth: 1360px)"
        />

        <img
          src={`${item.webp_1x}`}
          alt={item.alt}
          className={s.contact__img}
        />
      </picture>
      <div className={s.contact__content}>
        <Form />
      </div>
    </>
  )
}
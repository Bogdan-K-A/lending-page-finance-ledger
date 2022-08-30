import React from 'react'
import socialIconsArr from '../../assets/icons/social-icons-arr/socialIconsArr'
import { SocialItem } from '../../shared/social-item/SocialItem'
import s from './Footer.module.scss'
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.footer__icon_list}>
        {socialIconsArr.map((item) => (
          <SocialItem type={'footer'} item={item} key={item.icon_id} />
        ))}
      </ul>
      <p className={s.footer__text}>Copyright © 2021 - FinanceLedger</p>
    </footer>
  )
}

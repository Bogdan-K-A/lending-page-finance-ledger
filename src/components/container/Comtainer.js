import React from 'react'
import s from './Container.module.scss'

export const Comtainer = ({ children }) => {
  return <div className={s.container}>{children}</div>
}

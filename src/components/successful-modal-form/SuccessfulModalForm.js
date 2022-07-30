import React, { useEffect } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

import s from './SuccessfulModalForm.module.scss'

export const SuccessfulModalForm = ({ active, setActive }) => {
  const modalActive = active ? s.active : s.modal

  const handleCloce = () => {
    setActive(false)
  }

  useEffect(() => {
    setActive(false)
  }, [])

  return (
    <div className={modalActive}>
      <div className={s.modal__content}>
        <h2 className={s.modal__title}>Thanck you</h2>
        <p className={s.modal__text}>Your form submission has been received</p>

        <a href="/" onClick={handleCloce} className={s.modal__back_btn}>
          <IoMdArrowRoundBack /> <span>Back to our site</span>
        </a>
      </div>
    </div>
  )
}

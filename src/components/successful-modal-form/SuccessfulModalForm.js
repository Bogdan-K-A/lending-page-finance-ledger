import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

import s from './SuccessfulModalForm.module.scss'

const modalRoot = document.querySelector('#modal-root')

export const SuccessfulModalForm = ({ active, setActive }) => {
  const modalActive = active ? s.active : s.modal

  const handleCloce = () => {
    setActive(false)
  }

  // useEffect(() => {
  //   handleCloce()
  // }, [modalActive])

  return createPortal(
    <div className={modalActive}>
      <div className={s.modal__content}>
        <h2 className={s.modal__title}>Thanck you</h2>
        <p className={s.modal__text}>Your form submission has been received</p>

        <a href="#home" onClick={handleCloce} className={s.modal__back_btn}>
          <IoMdArrowRoundBack /> <span>Back to our site</span>
        </a>
      </div>
    </div>,
    modalRoot,
  )
}

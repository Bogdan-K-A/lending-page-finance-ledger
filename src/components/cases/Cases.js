import React, { useState } from 'react'
import { CasesItem } from './cases-item/CasesItem'
import { ModalSliderGallery } from './modal-slider-gallery/ModalSliderGallery'

import s from './Cases.module.scss'

export const Cases = ({ items }) => {
  const [showModal, setShowModal] = useState(false)
  const [itemLooking, setItemLooking] = useState(null)

  const onClickImg = (el) => {
    setShowModal(true)
    setModalImg(el.jpg_1x, el.alt, el.id)
  }

  const setModalImg = (src, alt, id) => {
    setItemLooking({ src: src, alt: alt, id: id })
  }

  const modalClose = () => {
    setShowModal(false)
    setItemLooking(null)
  }

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
          <CasesItem item={item} key={item.id} onClickImg={onClickImg} />
        ))}
      </ul>
      {showModal && (
        <ModalSliderGallery
          itemLooking={itemLooking}
          onCloseModal={modalClose}
          changeImage={setModalImg}
        />
      )}
    </section>
  )
}

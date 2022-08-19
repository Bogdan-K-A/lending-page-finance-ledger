import { useState } from 'react'
import { createPortal } from 'react-dom'
import casesImagesArr from '../../assets/images/cases/casesImagesArr'

import s from './ModalSliderGallery.module.scss'

const modalRoot = document.querySelector('#modal-root')

export const ModalSliderGallery = ({
  itemLooking,
  onCloseModal,
  changeImage,
}) => {
  const { src, alt, id } = itemLooking

  const [dataImages, setDataImages] = useState(casesImagesArr)
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentNumImg = currentIndex + 1

  const nextImg = () => {
    const isLastSlide = currentIndex === dataImages.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1

    setCurrentIndex(newIndex)
    let imgUrl = dataImages[newIndex].webp_1x
    let imgAlt = dataImages[newIndex].alt

    changeImage(imgUrl, imgAlt)
  }

  const prevImg = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? dataImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    let imgUrl = dataImages[newIndex].jpg_1x
    let imgAlt = dataImages[newIndex].alt

    changeImage(imgUrl, imgAlt)
  }

  const onCloseBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal()
    }
  }

  return createPortal(
    <div className={s.modal__overlay} onClick={onCloseBackdrop}>
      <div className={s.modal__container}>
        <div className={s.modal__btn_left} onClick={prevImg}>
          left
        </div>

        <img src={src} alt={alt} />

        <div className={s.modal__btn_right} onClick={nextImg}>
          right
        </div>
      </div>
      <p style={{ color: 'white' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
        eveniet!
      </p>
      <span style={{ color: 'white' }}>{` ${id ? id : currentNumImg}/${
        dataImages.length
      }`}</span>
    </div>,
    modalRoot,
  )
}

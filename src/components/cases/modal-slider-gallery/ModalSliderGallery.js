import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { SvgSelector } from '../../../assets/icons/svgSelector/SvgSelector'
import casesImagesArr from '../../../assets/images/cases/casesImagesArr'

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

  const findIndexImg = (src) => {
    return dataImages.indexOf(dataImages.find((el) => el.jpg_1x === src))
  }

  let findCurrentIndex = findIndexImg(src)

  const nextImg = () => {
    const isLastSlide = findCurrentIndex === dataImages.length - 1
    const newIndex = isLastSlide
      ? (findCurrentIndex = -1)
      : findCurrentIndex + 1

    setCurrentIndex(newIndex)
    let imgUrl = dataImages[newIndex].jpg_1x
    let imgAlt = dataImages[newIndex].alt

    changeImage(imgUrl, imgAlt)
  }

  const prevImg = () => {
    const isFirstSlide = findCurrentIndex - 1 === currentIndex
    const newIndex = isFirstSlide
      ? (findCurrentIndex = dataImages.length)
      : findCurrentIndex - 1

    setCurrentIndex(findCurrentIndex)
    let imgUrl = dataImages[newIndex].jpg_1x
    let imgAlt = dataImages[newIndex].alt

    changeImage(imgUrl, imgAlt)
  }

  const onCloseBackdrop = (e) => {
    e.stopPropagation()
    if (e.target === e.currentTarget) {
      onCloseModal()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onCloseModal()
    }
  }

  return createPortal(
    <div className={s.modal__overlay} onClick={onCloseBackdrop}>
      <div className={s.modal_wrapper_content}>
        <div className={s.modal__container}>
          {findCurrentIndex ? (
            <span className={s.modal__btn_left} onClick={prevImg}>
              <SvgSelector id="angle-right" />
            </span>
          ) : null}

          <img src={src} alt={alt} className={s.modal__img} />

          {findCurrentIndex === dataImages.length - 1 ? null : (
            <span className={s.modal__btn_right} onClick={nextImg}>
              <SvgSelector id="angle-right" />
            </span>
          )}
        </div>

        <div className={s.modal__img_description}>
          <div>
            <p>{alt}</p>
            <span>{` image ${id ? id : findCurrentIndex + 1} of ${
              dataImages.length
            }`}</span>
          </div>
          <span className={s.close_icon} onClick={onCloseModal}>
            <SvgSelector id="close-modal" />
          </span>
        </div>
      </div>
    </div>,
    modalRoot,
  )
}

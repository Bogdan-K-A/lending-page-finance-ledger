import React, { useState } from 'react'
import { Form } from './component/form/Form'
import { Picture } from '../../shared/picture/Picture'
import { Container } from '../../shared/container/Container'
import { SuccessfulModalForm } from './component/successful-modal-form/SuccessfulModalForm'
import s from './Contact.module.scss'

export const Contact = ({ item }) => {
  const [activeModal, setActiveModal] = useState(false)

  return (
    <Container>
      <div className={s.contact} id={'contact'}>
        <Picture item={item} />

        <div className={s.contact__content}>
          <Form setActive={setActiveModal} />
        </div>
        {activeModal && (
          <SuccessfulModalForm
            active={activeModal}
            setActive={setActiveModal}
          />
        )}
      </div>
    </Container>
  )
}

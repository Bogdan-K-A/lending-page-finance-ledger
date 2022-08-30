import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { SvgSelector } from '../../../../assets/icons/svgSelector/SvgSelector'

import s from '../form/Form.module.scss'

export const Form = ({ setActive }) => {
  return (
    <>
      <Formik
        initialValues={{ email: '', login: '' }}
        onSubmit={(values, { resetForm }) => {
          if (values) {
            resetForm({ email: '', login: '' })
            return setActive(true)
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('This is a required field'),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props

          return (
            <form onSubmit={handleSubmit} className={s.form}>
              <h2 className={s.form__title}>Request Callback</h2>

              <div className={s.wrapper_input_login}>
                <input
                  className={s.form__input_login}
                  placeholder=" "
                  id="login"
                  type="text"
                  value={values.login}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="login" className={s.input__label_login}>
                  Enter your name
                </label>
              </div>

              <div className={s.wrapper_input_email}>
                <input
                  className={s.form__input_email}
                  placeholder=" "
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="email" className={s.input__label_email}>
                  Enter email *
                </label>
                {errors.email && touched.email ? (
                  <div style={{ color: 'red', display: 'flex' }}>
                    <span>
                      <SvgSelector id="form" />
                    </span>
                    {errors.email}
                  </div>
                ) : (
                  <div style={{ height: '28px' }}></div>
                )}
              </div>

              <button type="submit" className={s.form__btn}>
                Send
              </button>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

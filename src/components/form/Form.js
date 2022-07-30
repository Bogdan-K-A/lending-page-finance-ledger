import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { SvgSelector } from '../../assets/icons/svgSelector/SvgSelector'

import s from '../form/Form.module.scss'

export const Form = ({ setActive }) => {
  return (
    <section>
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
            <div>
              <form onSubmit={handleSubmit} className={s.form}>
                <label>
                  <h2 className={s.form__title}>Request Callback</h2>
                </label>
                <input
                  className={s.form__input_name}
                  placeholder="Enter your name"
                  id="login"
                  type="text"
                  value={values.login}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <label className={s.form__label}>
                  <input
                    className={s.form__input_email}
                    placeholder="Enter email *"
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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
                </label>

                <button type="submit" className={s.form__btn}>
                  Send
                </button>
              </form>
            </div>
          )
        }}
      </Formik>
    </section>
  )
}
// <>
//   <Formik
//     initialValues={{ email: '', name: '' }}
//     onSubmit={async (values) => {
//       await new Promise((resolve) => setTimeout(resolve, 500))

//       alert(JSON.stringify(values, null, 2))
//     }}
//     validationSchema={Yup.object().shape({
//       email: Yup.string().email().required('This is a required field'),
//     })}
//   >
//     {(props) => {
//       const {
//         values,
//         touched,
//         errors,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//       } = props

//       return (
//         <form onSubmit={handleSubmit} className={s.form}>
//           <label>
//             <h2 className={s.form__title}>Request Callback</h2>
//           </label>
//           <input
//             className={s.form__input_name}
//             placeholder="Enter your name"
//             type="name"
//             value={values.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           <label className={s.form__label}>
//             <input
//               className={s.form__input_email}
//               placeholder="Enter email *"
//               type="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />

//             {errors.email && touched.email ? (
//               <div style={{ color: 'red', display: 'flex' }}>
//                 <span>
//                   <SvgSelector id="form" />
//                 </span>
//                 {errors.email}
//               </div>
//             ) : (
//               <div style={{ height: '28px' }}></div>
//             )}
//           </label>
//           <button type="submit" className={s.form__btn}>
//             Send
//           </button>
//         </form>
//       )
//     }}
//   </Formik>
// </>

import classNames from 'classnames'
import './Button.scss'

export const Button = ({ children, onClick, type }) => {
  const btnClass = classNames({
    btn: true,
    'btn--primary': type === 'primary',
    'btn--secondary-green': type === 'secondary-green',
    'btn--secondary-blue': type === 'secondary-blue',
  })

  return (
    <div className={btnClass} onClick={onClick}>
      {children}
    </div>
  )
}

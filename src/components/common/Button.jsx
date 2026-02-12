import React from 'react'
import './Button.scss';

const Button = ({text,className='pink-button'}) => {
  return (
    <button className={className}>
    {text}
    </button>
  )
}

export default Button
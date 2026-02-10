import React from 'react'
import './ModalHeading.scss'

const ModalHeading = ({text}) => {
  return (
    <div className='modal-heading'  dangerouslySetInnerHTML={{ __html: text }}>
    </div>
  )
}

export default ModalHeading
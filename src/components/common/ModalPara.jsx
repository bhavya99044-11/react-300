import React from 'react'
import './ModalPara.scss'

const ModalPara = ({text}) => {
  return (
    <div className='modal-para' dangerouslySetInnerHTML={{ __html: text }}></div>
  )
}

export default ModalPara
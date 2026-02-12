import React from 'react'
import './ModalPara.scss'

const ModalPara = ({text,width}) => {
  return (
    <div style={{
      maxWidth:width
    }} className='modal-para' dangerouslySetInnerHTML={{ __html: text }}></div>
  )
}

export default ModalPara 
import React from 'react'
import './Caraousel.scss';
import InfiniteCaraousel from '../components/common/InfiniteCaraousel';

const Caraousel = () => {
  return (
    <div className='caraousel-wrapper'>
      <div className='caraousel-page'>
          <div className='black-shadow'></div>
            <div className='caraousel-left'></div>
          <div className=''><InfiniteCaraousel/></div> 
      </div>
    </div>
  )
}

export default Caraousel
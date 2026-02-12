import React from 'react'
import './ChooseUs.scss';
import ModalHeading from '../components/common/ModalHeading';
import ModalPara from '../components/common/ModalPara';
import Button from '../components/common/Button';

const ChooseUs = () => {
  return (
    <div className='choose-us'>
        <div className='description'>
            <ModalHeading text="Why Choose Us?"/>
            <ModalPara width="565px" text="We believe in long-term relationships and work closely with you to supercharge you growth and success. Our partners represent some of the best companies in the world, from innovative startups to Fortune 500 giants."/>
            <Button text="Let's get started"/>
        </div>
        <div className='choose-box'>
            <div className='box-first'>
                <div className='empty-box box'>

                </div>
                <div className='box active-box'>
                    <h2>1600+</h2>
                    <h3>Happy Clients</h3>
                </div>
                <div className='empty-box box'>

                </div>
            </div>
            <div className='box-second'>
                <div className='box'>
                    <h2>1600+</h2>
                    <h3>Happy Clients</h3>
                </div>                
                <div className='empty-box box'>
                </div>
                <div className='box'>
                    <h2>1600+</h2>
                    <h3>Happy Clients</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs
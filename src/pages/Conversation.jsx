import React from 'react';
import './Conversation.scss';
import Button from '../components/common/Button';

const Conversation = () => {
  return (
    <div className='conversation'>
        <div className='chat-box'>
            <h3>LET’S CREATE SOMETHING AWESOME</h3>
            <h2>Start a Conversation</h2>
            <Button className='white-button' text="Talk with us"/>
            <div className='chat-image'>
            <img src="panda.png" />
            </div>
            <div className='strip-wrapper'>
                <div className='strip-1'/>
            </div>
            <div className='strip-wrapper-second'>
                <div className='strip-1'/>
            </div>
        </div>
    </div>
  )
}

export default Conversation


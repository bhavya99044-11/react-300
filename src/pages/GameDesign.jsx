import React from 'react'
import './GameDesign.scss';
import ModalPara from '../components/common/ModalPara'
import ModalHeading from '../components/common/ModalHeading'

const GameDesign = () => {
  return (
    <div className='game-design'>
        <ModalHeading text="Game Design & </br> Development Tools" />
        <ModalPara width="567px" text="Apart from engaging features and high-quality graphics, we use state-of-the-art tools and technologies to turn your concept into an interesting game."/>

        <div className='game-design-caraousel'>
            <div className='game-box'>
                <div className='image-box'>
                    <img src="unity.png"/>
                </div>
                <span>Unity</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="cocos.png"/>
                </div>
                <span>Cocos2D-X</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="unreal.png"/>
                </div>
                <span>Unreal Engine</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="html.png"/>
                </div>
                <span>HTML 5</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="blender.png"/>
                </div>
                <span>Blender</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="phaser.png"/>
                </div>
                <span>Phaser</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="sketch.png"/>
                </div>
                <span>Sketch</span>
            </div>
            <div className='game-box'>
            <div className='image-box'>
                    <img src="illustrator.png"/>
                </div>
                <span>illustrator</span>
            </div>
        </div>
    </div>
  )
}

export default GameDesign
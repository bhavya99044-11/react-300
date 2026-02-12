import React from 'react'
import './GenresGames.scss';
import ModalPara from '../components/common/ModalPara';
import ModalHeading from '../components/common/ModalHeading';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DevelopmentWork.scss";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GenresGames = () => {
  return (
    <div className='genres-pages'>
        <div className='genres-games'>
            <ModalHeading text="Genres of Games </br> We Serve"/>
            <ModalPara width="565px" text="Our game development team puts in great effort to develop best-in-class mobile games of all genres that run seamlessly across Android and iOS devices."/>
        </div>
        <div className='genres-caraousel'>
        <Swiper
        loop={true}
            modules={[Pagination]}
            spaceBetween={40}
            watchSlidesProgress={true}
            breakpoints={{
                320: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                },
                680: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
                1000: {
                slidesPerView: 5.5,
                spaceBetween: 40,
                },
            }}
            className="genres-swiper"
            >
               <SwiperSlide>
                <div className='game-box'>
                    <img src="game.png"/>
                    <p>Casual Games</p>
                    <img className='bg-image' src='bg-game.png' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='game-box'>
                    <img src="arcade.png"/>
                    <p>Arcade Games</p>
                    <img className='bg-image' src='bg-game.png' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='game-box'>
                    <img src="Puzzle.png"/>
                    <p>Puzzle Games</p>
                    <img className='bg-image' src='bg-game.png' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='game-box'>
                    <img src="Krypto.png"/>
                    <p>Crypto Games</p>
                    <img className='bg-image' src='bg-game.png' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='game-box'>
                    <img src="Educational.png"/>
                    <p>Educational Games</p>
                    <img className='bg-image' src='bg-game.png' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='game-box'>
                    <img src="kids.png"/>
                    <p>Kids Games</p>
                    <img className='bg-image' src='bg-game.png' />
                </div>
              </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default GenresGames
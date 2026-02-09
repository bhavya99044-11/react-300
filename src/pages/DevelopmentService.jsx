import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./DevelopmentService.scss";
import ModalHeading from "../components/common/ModalHeading";
import ModalPara from "../components/common/ModalPara";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { SlArrowLeftCircle ,SlArrowRightCircle} from "react-icons/sl";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const DevelopmentService = () => {
  
  const prevClick =(item)=>{
    const target = document.querySelector('.swiper-button-prev')
    target.click()
  }

  const nextClick =()=>{
    const target = document.querySelector('.swiper-button-next')
    target.click();
  }

  return (
    <div className="development-service">
      <ModalHeading text="Game Development Services" />
      <ModalPara text="Mind Inventory is a game development studio that builds outstanding games in 2D and 3D dimensions." />
      <div className="service-caraousel">
        <Swiper
          modules={[FreeMode, Pagination,Navigation]}
          freeMode={true}
          grabCursor={true}
          spaceBetween={24}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1800: {
              slidesPerView: 3.5,
              spaceBetween: 60,
            },
          }}
          className="service-content"
        >
          <SwiperSlide>
            <div className="service-block">
              <div className="service-image">
                <img src="../../public/unity-game.png" />
              </div>
              <p className="">Unity 3D Game Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-block">
              <div className="service-image">
                <img src="../../public/unity-game.png" />
              </div>
              <p className="">Unity 3D Game Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-block">
              <div className="service-image">
                <img src="../../public/unity-game.png" />
              </div>
              <p className="">Unity 3D Game Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-block">
              <div className="service-image">
                <img src="../../public/unity-game.png" />
              </div>
              <p className="">Unity 3D Game Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-block">
              <div className="service-image">
                <img src="../../public/unity-game.png" />
              </div>
              <p className="">Unity 3D Game Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-block">
              <div className="service-image">
                <img src="../../public/unity-game.png" />
              </div>
              <p className="">Unity 3D Game Development</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="remote">
        <div>
          <img src="remote.png"/>
            <SlArrowRightCircle onClick={()=>nextClick()}   className="right-arrow" />
            <SlArrowLeftCircle onClick={()=>prevClick()}  className="left-arrow"/>
          </div>
      </div>
    </div>
  );
};

export default DevelopmentService;

import React from "react";
import "./ClientSay.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ClientSay = () => {

    const prevClick =()=>{
        const target = document.querySelectorAll('.swiper-button-prev')
        target[1].click()
      }
    
      const nextClick =()=>{
          const target = document.querySelectorAll('.swiper-button-next')
        target[1].click();
      }

  return (
    <div className="client-say">
        <div className="title">What Our Clients Say</div>
      <div className="client-box">
        <div className="border" />
        <div className="context">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={true}
            slidesPerView={1}
            grabCursor={true}
            freeMode={true}
          >
            <SwiperSlide>
              <div className="data">
                <p>
                  MindInventory developed and launched an Android and iOS app
                  from scratch. Additionally, they provided free support for two
                  months after the launch to ensure bugs and updates were
                  handled smoothly.
                </p>
                <div className="profile">
                  <img src="profile.png" />
                  <div>
                    <h3>Andrej Fister</h3>
                    <h5>-Thailand</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="data">
            <p>
              MindInventory developed and launched an Android and iOS app from
              scratch. Additionally, they provided free support for two months
              after the launch to ensure bugs and updates were handled smoothly.
            </p>
            <div className="profile">
              <img src="profile.png" />
              <div>
                <h3>Andrej Fister</h3>
                <h5>-Thailand</h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="data">
          <p>
              MindInventory developed and launched an Android and iOS app from
              scratch. Additionally, they provided free support for two months
              after the launch to ensure bugs and updates were handled smoothly.
            </p>
            <div className="profile">
              <img src="profile.png" />
              <div>
                <h3>Andrej Fister</h3>
                <h5>-Thailand</h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="data">
          <p>
              MindInventory developed and launched an Android and iOS app from
              scratch. Additionally, they provided free support for two months
              after the launch to ensure bugs and updates were handled smoothly.
            </p>
            <div className="profile">
              <img src="profile.png" />
              <div>
                <h3>Andrej Fister</h3>
                <h5>-Thailand</h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          </Swiper>
          <div className="bg-image">
            <img src="ticks.png" />
          </div>
        </div>
        <div className="buttons">
          <FaArrowLeft onClick={()=>prevClick()} className="icons" />
          <FaArrowRight onClick={()=>nextClick()} className="icons" />
        </div>
      </div>
    </div>
  );
};

export default ClientSay;

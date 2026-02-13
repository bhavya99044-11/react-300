import React from "react";
import ModalHeading from "../components/common/ModalHeading";
import ModalPara from "../components/common/ModalPara";
import "./HireDeveloper.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DevelopmentWork.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';


const HireDeveloper = () => {
  return (
    <div className="hire-developer">
      <div className="container">
        <ModalHeading text="Hire Game Developers </br> As Per Your Need" />
        <ModalPara width="567px" text="Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy" />
        <div className="content">
        <Swiper
            modules={[Pagination, FreeMode]}
            watchSlidesProgress={true}
            breakpoints={{         
              0: {
                slidesPerView: 0.5,
                centeredSlides: false,
                spaceBetween:20,
              },
              680: {
                slidesPerView: 1.5,
                centeredSlides: true,
              },
              1000: {
                slidesPerView: 1.7,
                centeredSlides: true,
              },
              1700: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
          >
            <SwiperSlide>
              <div className="description">
                <h2>$30</h2>
                <h3>Hourly (USD)</h3>
                <span className="dash-line" />
                <div>
                  <p>We’ll provide a fully signed NDA for</p>
                  <p>your Project’s confidentiality</p>
                </div>
                <div className="hire-image">
                  <img src="hire-doll.png"></img>
                </div>
                <h4>Hire Us</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="description">
                <h2>$23</h2>
                <h3>Hourly (USD)</h3>
                <span className="dash-line" />
                <div>
                  <p>We’ll provide a fully signed NDA for</p>
                  <p>your Project’s confidentiality</p>
                </div>
                <div className="hire-image">
                  <img src="hire-doll.png"></img>
                </div>
                <h4>Hire Us</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="description">
                <h2>$13</h2>
                <h3>Hourly (USD)</h3>
                <span className="dash-line" />
                <div>
                  <p>We’ll provide a fully signed NDA for</p>
                  <p>your Project’s confidentiality</p>
                </div>
                <div className="hire-image">
                  <img src="hire-doll.png"></img>
                </div>
                <h4>Hire Us</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HireDeveloper;

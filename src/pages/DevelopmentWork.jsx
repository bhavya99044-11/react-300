import React, { useRef, useState } from "react";
import Button from "../components/common/Button";
import ModalPara from "../components/common/ModalPara";
import ModalHeading from "../components/common/ModalHeading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DevelopmentWork.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { developmentWork } from "../utils/constants/data";
import { Virtual, Navigation, Pagination } from "swiper/modules";

const DevelopmentWork = () => {
  const [activeSlider, setActiveSlider] = useState();

  const [sliderText,setSliderText]=useState(developmentWork[0])

  const handleSliderChange = (item) => {
    const realIndex=item.realIndex;
    const sliderData=developmentWork.find((item,i)=>(
        i==realIndex
    ))
    if(sliderData.id != sliderText.id){
        setSliderText(sliderData)
    }
  };

  return (
    <div className="development-work">
      <ModalHeading text="Our Game </br> Development Work" />
      <div className="devlopment-para">
        <ModalPara text="Mind Inventory is a game development studio that builds outstanding games in 2D and 3D dimensions." />
        <Button text="Request a quote" />
      </div>
      <div className="sub-development">
        <div className="slider-text">
          <h3>{sliderText.title}</h3>
          <p>
            {sliderText.context}
          </p>
        </div>
        <div className="slider">
          <Swiper
            modules={[Pagination]}
            loop={true}
            spaceBetween={30}
            slidesPerView={5.9}
            speed={800}
            watchSlidesProgress={true}
            onTransitionEnd={(item) => handleSliderChange(item)}
          >
            {developmentWork.map((item) => (
              <SwiperSlide key={item.id} data-id={item.id} style={{height: "500px" }}>
                    <img src={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentWork;

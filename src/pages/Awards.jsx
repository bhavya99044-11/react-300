import React from "react";
import "./Awards.scss";
import ModalHeading from "../components/common/ModalHeading";
import ModalPara from "../components/common/ModalPara";

const Awards = () => {
  return (
    <div className="awards">
      <div className="awards__container">
        <div className="awards__left">
          <ModalHeading text="Awards and Recognition" />
          <ModalPara text="Recognized as a top mobile app development company by popular platforms, Mind Inventory purely focuses on innovation and scalability." />
        </div>
        <div className="awards__right">
          <div className="hexagon">
            <div className="award-image">
              <img src="award-bg.png" />
            </div>
            <div class="r-hex purple">
              <div class="r-hex-inner purple"></div>
            </div>
          </div>
          <div className="hexagon pink">
            GoodFirms <span>4.7</span>
          </div>
          <div className="hexagon green">
            BusinessApps <span>4.5</span>
          </div>
          <div className="hexagon maroon">
            Glassdoor <span>4.4</span>
          </div>
          <div className="hexagon blue">
            Google <span>4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;

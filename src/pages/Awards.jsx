import React from "react";
import "./Awards.scss";
import ModalHeading from "../components/common/ModalHeading";
import ModalPara from "../components/common/ModalPara";

const Awards = () => {
  const awards = [
    { color: "purple" ,star:'4.6',logo:'clutch.png'},
    { color: "coral",star:'4.7',logo:'good-firms.png' },
    { color: "teal",star:'4.5',logo:'business.png' },
  ];

  const awardsLast = [
    { color: "burgundy",star:'4.4',logo:'glassdoor.png' },
    { color: "blue",star:'4.5',logo:'google-hex.png' }
  ];

  return (
    <div className="awards">
      <div className="awards__container">
        <div className="awards__left">
          <ModalHeading text="Awards and </br> Recognition" />
          <ModalPara width="565px" text="Recognized as a top mobile app development company by popular platforms, Mind Inventory purely focuses on innovation and scalability." />
        </div>
        <div className="awards__right">
          <div className="awards-top">
            {awards.map((award, index) => (
              <div className="hexagon" key={index}>
              {/* <div className="hexagon" key={index}>
</div> */}
                {/* <div className="award-image">
                  <img src="award-bg.png" alt="award" />
                </div>
                <div className="logo-img">
                  <img src={award.logo}/>
                </div>
                  <span>{award.star}</span>
                <div className={`r-hex-wrapper ${award.color}`}>
                  <div className={`r-hex ${award.color}`}>
                    <div className={`r-hex-inner ${award.color}`}></div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          <div className="awards-bottom">
            {awardsLast.map((award, index) => (
              <div className="hexagon" key={index}>
                <div className="award-image">
                  <img src="award-bg.png" alt="award" />
                </div>
                <div className="logo-img">
                  <img src={award.logo}/>
                </div>
                <span>{award.star}</span>

                <div className={`r-hex-wrapper ${award.color}`}>
                  <div className={`r-hex ${award.color}`}>
                    <div className={`r-hex-inner ${award.color}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
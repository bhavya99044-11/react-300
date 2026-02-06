import React from "react";
import "./InfiniteCaraousel.scss";

const InfiniteCaraousel = ({ className }) => {
  return (
    <div className="carousel">
      <div className="group">
        <div className="card">
          <img src="/caraousel/tinder.png" />
        </div>
        <div className="card">
          <img src="/caraousel/tinder.png" />
        </div>
      </div>
      <div aria-hidden className="group">
        <div className="card">
          <img src="/caraousel/tinder.png" />
        </div>
        <div className="card">
          <img src="/caraousel/tinder.png" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteCaraousel;

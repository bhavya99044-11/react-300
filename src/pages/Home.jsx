import React from "react";
import "./Home.scss";
import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <div className="home flex items-center flex-col justify-center">
      <div className="content flex flex-col items-center">
        <h2 className="">
          We Design <span>& Devel<FaRegCirclePlay size={71} className="icon" />p</span>
        </h2>
        <div className=""></div>
        <h2 className="flex items-center justify-center">Amazing<span>Games</span></h2>
        <p>Helping our clients make the domain of game better with our services.</p>
      </div>
      <Button text="Request a quote"/>
      <div className="left-blur-circle"/>
      <div className="right-blur-circle"/>
      <img src="scroll.png" className="scroll-image" alt="Scroll Image"/>
      <div className="bottom-blur"/>
    </div>
  );
};

export default Home;

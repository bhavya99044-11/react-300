import React from "react";
import "./Header.scss";
import { RiMailSendLine } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import Button from "../common/Button";

const Header = () => {
  return (
    <div className="header flex flex-row justify-between">
      <div className="mi-logo">
        <img src="mindinventory.png" alt="mindinventory.logo" />
      </div>
      <div className="flex flex-row gap-8">
      <div className="flex flex-row items-center justify-between company-contact">
        <div className="flex items-center justify-center">
          <RiMailSendLine className="mr-1 icon" />
          <span>sales@mindinventory.com</span>
        </div>
        <div className="verticle-line ml-5 mr-5"></div>
        <div className="flex items-center justify-center">
          <IoIosCall className="mr-1 icon" />
          <span>+1-216-609-0691</span>
        </div>
      </div>
        <Button text="Contact Us"/>
      </div>
    </div>
  );
};

export default Header;

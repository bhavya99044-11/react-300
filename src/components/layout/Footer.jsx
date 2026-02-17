import React, { useState } from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaSkype,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaPinterest,
  FaMedium,
  FaReddit,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import Button from "../common/Button";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    contactNumber: "",
    country: "India",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h2 className="footer__title">For Project Inquiries</h2>

          <form className="footer__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="footer__input"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="footer__input"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="footer__phone">
              <div className="footer__select-wrapper footer__select-wrapper--code">
                <select
                  name="countryCode"
                  className="footer__select footer__select--code"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <IoChevronDown className="footer__select-icon" />
              </div>

              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className="footer__input footer__input--phone"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="footer__select-wrapper footer__select-wrapper--country">
              <select
                name="country"
                className="footer__select footer__select--country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <IoChevronDown className="footer__select-icon" />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="footer__textarea"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>

            <Button text="Send message" />
          </form>
        </div>

        <div className="footer__right">
          <div className="footer__locations">
            <div className="footer__location">
              <div className="footer__location-header">
                <MdLocationOn size={20} className="footer__icon" />
                <span className="footer__location-name">USA</span>
              </div>
              <p className="footer__address">
                9341 Ellis Way, Strongsville,
                <br />
                Ohio 44136, USA
              </p>
              <a href="tel:+12166090691" className="footer__phone-link">
                <MdPhone className="footer__icon" />
                +1-216-609-0691
              </a>
            </div>

            <div className="footer__location">
              <div className="footer__location-header">
                <MdLocationOn size={20} className="footer__icon" />
                <span className="footer__location-name">India</span>
              </div>
              <p className="footer__address">
                801, City Centre 2, Science City Road,
                <br />
                Ahmedabad-380060, Gujarat, India
              </p>
              <a href="tel:+919512293490" className="footer__phone-link">
                <MdPhone className="footer__icon" />
                +91-951-229-3490
              </a>
            </div>
          </div>

          <div className="footer__contact-info">
            <a href="https://biz.mindinventory.com" className="footer__link">
              <BsGlobe className="footer__icon" />
              biz.mindinventory
            </a>
            <p className="footer__social-title">Follow us on</p>
            <a href="mailto:sales@mindinventory.com" className="footer__link">
              <MdEmail className="footer__icon" />
              sales@mindinventory.com
            </a>

          <div className="footer__social">
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaSkype size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaLinkedinIn  size={16}/>
              </a>
              <a href="#" className="footer__social-link">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaGithub size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaPinterest size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaMedium size={16} />
              </a>
              <a href="#" className="footer__social-link">
                <FaReddit size={16} />
              </a>
            </div>
          </div>
          </div>
          <div className="footer__copyright">
          <span className="footer-text-line"/>
            <p className="footer-text">© 2022 Mindinventory. All rights reserved.</p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;

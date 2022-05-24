import React from "react";
import "./../../App.css";
import Logo from "./../GeneralisedImage/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <img
              src={Logo}
              alt="..."
              style={{ height: "60px", width: "60px" }}
            ></img>{" "}
            Solar Companion
          </div>
          <div className="col">
            <h5>Main Menu</h5>
            <div className="d-flex flex-column bd-highlight mb-3">
              <div
                className="bd-highlight"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </div>
              <div
                className="bd-highlight"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About Us
              </div>
              <div
                className="bd-highlight"
                onClick={() => {
                  navigate("/pp");
                }}
              >
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="col">
            <h5>Contact Us</h5>
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="bd-highlight">+91 9xxxxxxx9</div>
              <div className="bd-highlight">pranavxxxxx@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col" />
          <div className="col"></div>
          <div className="col">
            <h5>FOLLOW US</h5>

            <a href="https://www.youtube.com" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>

        <div className="row align-items-end">
          
          <div className="col text-center"> Solar Companion © End to End Solar Solutions </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;

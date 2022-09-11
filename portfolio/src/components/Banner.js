import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: "Pintu Gouda",
    text: "FULL-STACK WEB DEVELOPER",
    image: "./images/whatsapp.png",
  });
  return (
    <header id="Banner" className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <ul className="contactCircles">
                  <li>
                    <a href="https://github.com/pintu8328" target="_blank">
                      <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pintu-gouda-935231237/"
                      target="_blank"
                   
                    >
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://twitter.com/PintuGo65780560"
                      target="_blank"
                   
                    >
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
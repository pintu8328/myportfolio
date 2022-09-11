import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaMobileAlt,
  FaLocationArrow,
  FaGooglePlusSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo"></div>
              <p className="cont" id="cont" >
                Contact Details
              </p>
              
              <div className="fl">
                <p>
                  <FaMobileAlt></FaMobileAlt><span> </span> +91 8328919715
                </p>

                <p>
  
                  <FaLocationArrow> </FaLocationArrow><span> </span>Khallikote, Odisha
                </p>

                <p>
                  
                  <FaGooglePlusSquare></FaGooglePlusSquare><span> </span>
                  pintugouda1591998@gmail.com
                </p>
              </div>
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
                  <a href="https://www.facebook.com/home.php" target="_blank">
                    <FaFacebookF className="headerIcon" />
                  </a>
                </li> */}

                {/* <li>
                  <a
                    href="https://www.instagram.com/pintuu_98/"
                    target="_blank"
                  >
                    <FaInstagram className="headerIcon" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="text-center text-white bg-indigo-300 py-6 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <h5 className="text-xl font-semibold mb-4">Socials</h5>
            {/* Socials */}
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/zach.g33/" role="button" className="text-2xl">
                <FontAwesomeIcon icon={faInstagram} style={{width: "20px", height: "20px"}}/>
              </a>

              <a href="https://github.com/zdotg" role="button" className="text-2xl">
                <FontAwesomeIcon icon={faGithub} style={{width: "20px", height: "20px"}}/>
              </a>

              <a href="https://www.linkedin.com/in/zach-gallman/" role="button" className="text-2xl">
                <FontAwesomeIcon icon={faLinkedin} style={{width: "20px", height: "20px"}}/>
              </a>
            </div>
          </div>
          {/* Email and Phone Section */}
          <div className="text-center">
            <div className="contact-info mt-4 md:mt-0">
              <a href="tel:+13347181224" role="button" className="contact-link  text-lg my-2 flex justify-center items-center">
                <FontAwesomeIcon icon={faPhone} style={{width: "20px", height: "20px"}}/> 
                <span className="ml-1">1-334-718-1224</span>
              </a>

              <a href="mailto:zach.ecab@gmail.com" role="button" className="contact-link  text-lg my-2 flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} style={{width: "20px", height: "20px"}}/> 
                <span className="ml-1">zach.ecab@gmail.com</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

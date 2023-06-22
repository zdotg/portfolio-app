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
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://github.com/zdotg" role="button" className="text-2xl">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a href="https://www.linkedin.com/in/zach-gallman/" role="button" className="text-2xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          {/* Email and Phone Section */}
          <div className="text-center">
            <div className="contact-info mt-4 md:mt-0">
              <a href="tel:+13347181224" role="button" className="contact-link block text-lg my-2">
                <FontAwesomeIcon icon={faPhone} /> 1-334-718-1224
              </a>

              <a href="mailto:zach.ecab@gmail.com" role="button" className="contact-link block text-lg my-2">
                <FontAwesomeIcon icon={faEnvelope} /> zach.ecab@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

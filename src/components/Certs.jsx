'use client'

import React, {useState} from "react";
import Image from "next/image";
import Bootstrap from "../public/images/certificates/Bootstrap.png";
import DSA from "../public/images/certificates/Data_StructuresandAlgos.png";
import ReactNative from "../public/images/certificates/React_Native.png";
import FrontEnd from "../public/images/certificates/Front_End_WebandMobile.png";
import FullStack from "../public/images/certificates/Full_Stack_WebandMobile.png";
import HCJ from "../public/images/certificates/HTML_CSS_JS.png";
import ReactCert from "../public/images/certificates/React.png";
import SQLDevops from "../public/images/certificates/Sql_Devops_Python.png";
import Modern from "../public/images/certificates/ModernSWE.png";
import SQLData from "../public/images/certificates/Sql_Data_MOdeling.png";

const Certs = () => {

  const [showCertificates, setShowCertificates] = useState(false);

  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };
  return (
    <div>
      <div className="bg-indigo-50  text-center  py-5 w-10/12 mx-auto">
        <button onClick={toggleCertificates} className="block mx-auto mb-5 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200">
          {showCertificates ? 'Hide Certificates' : 'Show Certificates'}
        </button>
        {showCertificates && (
        <div className="flex flex-wrap justify-center ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={HCJ} alt="Web Dev" />
              <p>Web Dev Fundamentals Bootcamp</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={DSA} alt="Web Dev" />
              <p>Python Fundamentals Data Structures, and Algorithms</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={SQLData} alt="Web Dev" />
              <p>SQL and Python</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={Modern} alt="Web Dev" />
              <p>Modern Software Engineering with DevOps</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={SQLDevops} alt="Web Dev" />
              <p>Backend Python, SQL, and Devops Bootcamp</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={Bootstrap} alt="Web Dev" />
              <p>Front-End Web UI Framework: Bootstrap</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={ReactCert} alt="Web Dev" />
              <p>Front End JavaScript Library: React</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={ReactNative} alt="Web Dev" />
              <p>Multiplatform Mobile App Development with React Native</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={FrontEnd} alt="Web Dev" />
              <p>Front End Web and Mobile Development Bootcamp</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-gradient">
            <div>
              <Image className="transform hover:scale-110 transition-transform" src={FullStack} alt="Web Dev" />
              <p>Server-side Development with NodeJS Express and MongoDB</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Certs;

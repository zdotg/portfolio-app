'use client'

import React, { useState } from "react";
import Image from "next/image";
import Bootstrap from "../../public/images/certificates/Bootstrap.png";
import DSA from "../../public/images/certificates/Data_StructuresandAlgos.png";
import ReactNative from "../../public/images/certificates/React_Native.png";
import FrontEnd from "../../public/images/certificates/Front_End_WebandMobile.png";
import FullStack from "../../public/images/certificates/Full_Stack_WebandMobile.png";
import HCJ from "../../public/images/certificates/HTML_CSS_JS.png";
import ReactCert from "../../public/images/certificates/React.png";
import SQLDevops from "../../public/images/certificates/Sql_Devops_Python.png";
import Modern from "../../public/images/certificates/ModernSWE.png";
import SQLData from "../../public/images/certificates/Sql_Data_MOdeling.png";

const Certs = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };

  return (
    <div className="dark:bg-slate-800 bg-white">
      <div className="bg-indigo-50 rounded text-center py-5 w-10/12 mx-auto dark:bg-slate-600 dark:rounded dark:border-none">
        <button
          onClick={toggleCertificates}
          className="block mx-auto mb-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200"
        >
          {showCertificates ? "Hide Certificates" : "Show Certificates"}
        </button>
        {showCertificates && (
          <div className="flex flex-wrap justify-center">
            <CertificateItem
              image={HCJ}
              alt="Web Dev"
              description="Web Dev Fundamentals Bootcamp"
            />
            <CertificateItem
              image={DSA}
              alt="Web Dev"
              description="Python Fundamentals Data Structures and Algorithms"
            />
            <CertificateItem
              image={SQLData}
              alt="Web Dev"
              description="SQL and Python"
            />
            <CertificateItem
              image={Modern}
              alt="Web Dev"
              description="Modern Software Engineering with DevOps"
            />
            <CertificateItem
              image={SQLDevops}
              alt="Web Dev"
              description="Backend Python, SQL, and Devops Bootcamp"
            />
            <CertificateItem
              image={Bootstrap}
              alt="Web Dev"
              description="Front-End Web UI Framework: Bootstrap"
            />
            <CertificateItem
              image={ReactCert}
              alt="Web Dev"
              description="Front End JavaScript Library: React"
            />
            <CertificateItem
              image={ReactNative}
              alt="Web Dev"
              description="Multiplatform Mobile App Development with React Native"
            />
            <CertificateItem
              image={FrontEnd}
              alt="Web Dev"
              description="Front End Web and Mobile Development Bootcamp"
            />
            <CertificateItem
              image={FullStack}
              alt="Web Dev"
              description="Server-side Development with NodeJS Express and MongoDB"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const CertificateItem = ({ image, alt, description }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-stone-700 dark:text-slate-100">
    <div>
      <Image
        className="transform hover:scale-110 transition-transform"
        src={image}
        alt={alt}
        width={400}
        height={300}
      />
      <p>{description}</p>
    </div>
  </div>
);

export default Certs;

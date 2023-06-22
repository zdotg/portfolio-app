'use client'

import React, { useState } from "react";
import AboutMemoji from "../../public/images/AboutMemoji.png";
import Image from "next/image";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" bg-white text-stone-700 p-5 dark:bg-slate-800 dark:text-slate-100" id="About">
      <div className="container mx-auto shadow-md" >
        <div className="flex flex-col lg:flex-row items-center mx-auto" style={{maxWidth: "85%"}}>
          <div className="w-full md:w-1/2 pr-2">
            <Image
              src={AboutMemoji}
              alt="My memoji"
              className="rounded-l-full"
              style={{layout: "responsive", objectFit: "contain", objectPosition: "center"}}
              quality={100}
              priority
            />
          </div>
          <div className="w-full md:w-1/2 pl-3">
            <div className="pb-2">
              <h2 className="text-2xl font-light dark:text-slate-100">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className={`text-sm ${isExpanded ? "" : "line-clamp-5 overflow-hidden"}`}>
                I am a passionate and driven individual who discovered my love
                for web development during the height of the pandemic. As the
                world faced unprecedented challenges, I found solace and
                inspiration in the vast world of software engineering. This
                newfound passion quickly turned into an obsession, leading me to
                enroll in NuCamp, a comprehensive bootcamp.
                {isExpanded && (
                  <>
                    {" "}
                    Currently, I am on a transformative journey to become a full
                    stack developer, focusing on industry-leading languages and
                    technologies. My curriculum includes a wide range of topics
                    such as web development fundamentals, HTML, CSS, JavaScript,
                    server-side development with NodeJS, Express, and MongoDB,
                    multiplatform mobile app development with React Native,
                    front-end web UI frameworks like Bootstrap, front-end
                    JavaScript library React, SDLC, Agile, DevOps, CI/CD, and
                    deploying apps to top cloud providers including Amazon AWS,
                    Microsoft Azure, and Google Cloud/Firestore. Additionally, I
                    am building a strong foundation in Javascript fundamentals,
                    data structures, algorithms, and SQL. Prior to my pursuit of
                    a career in software engineering, I worked in the
                    hospitality industry with a focus on concierge services and
                    wine sales. However, driven by my passion for technology and
                    the desire for a more impactful career, I have decided to
                    transition into the dynamic and ever-evolving field of web
                    development. With a blend of technical skills, a growth
                    mindset, and a dedication to continuous learning, I am
                    excited to contribute my knowledge and collaborate with
                    like-minded professionals in a challenging and rewarding
                    software engineering role. I am actively seeking
                    opportunities where I can leverage my skills, adaptability,
                    and enthusiasm to create innovative solutions and make a
                    positive impact. I am open to new opportunities and would
                    love to connect with companies that value creativity,
                    collaboration, and a strong commitment to excellence. 
                  </>
                )}
              </p>
            </div>
            <div className="pb-3">
              <button
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white     rounded-md font-medium hover:scale-105 transition-transform duration-200"
                  onClick={handleToggle}
                >
              {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

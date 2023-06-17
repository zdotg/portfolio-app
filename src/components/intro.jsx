import React from "react";
import Image from "next/image";
import emoji from "../public/images/emoji-sticker.png";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="p-5 bg-white text-stone-700 font-light  dark:text-slate-100  dark:bg-slate-800 ">
      <div className="container shadow-md">
        <div className="flex flex-col lg:flex-row items-center mx-auto" style={{maxWidth: "85%"}}>
          <div className="flex flex-col lg:w-2/3">
            <div className="pb-2">
              <h2 className="text-3xl lg:text-4xl mt-2">Hi, I&apos;m Zach</h2>
              <h3 className="text-2xl lg:text-3xl">
                <span className="text-gradient">A</span> Full Stack{" "}
                <span className="text-gradient">Web Developer</span>
              </h3>
              <small className=" mt-2 dark:text-slate-100">
                Utilizing a blend of technical skills, a growth mindset, and a
                dedication to continuous learning!
              </small>
            </div>
            <div className="mt-4 ">
              <Link legacyBehavior href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing">
                <a className="px-4 py-2 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200">View My Resume</a>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="relative w-full h-full">
              <Image
                src={emoji}
                alt="My memoji"
                className="rounded-full"
                style={{layout: "responsive", objectFit: "contain", objectPosition: "center"}}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

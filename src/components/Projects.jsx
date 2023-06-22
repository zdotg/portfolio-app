import React from "react";
import Link from "next/link";
import portfolio from "../../public/images/portfolio.png";
import wineShop from "../../public/images/little-wine-shop.png";
import photography from "../../public/images/photography.png";
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-100" id="Portfolio">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center text-3xl font-light py-5 animate-char">Projects</h2>
        <div className="flex flex-wrap justify-center columns-auto ">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
            <div className="flex flex-col p-2 h-full mb-3 mx-auto overflow-hidden border-solid border-4 border-indigo-200 rounded-md">
              <Image
                src={portfolio}
                className="w-full h-1/2 object-cover "
                alt="Portfolio Snippet"
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between max-h-full">
                  <div>
                    <h5 className="pt-3">Personal Portfolio</h5>
                    <p>Portfolio using React, Bootstrap, JavaScript, and CSS</p>
                  </div>
                  <div className="mt-4 ">
                    <Link legacyBehavior href="https://github.com/zdotg/portfolio-app">
                      <a className="px-4 py-2 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200">View Code</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
            <div className="flex flex-col h-full mb-3 mx-auto overflow-hidden border-solid border-4 border-indigo-200 p-2 rounded-md">
              <Image
                src={wineShop}
                className="w-full h-1/2  object-cover"
                alt="Little Wine Shop"
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between max-h-full">
                  <div>
                    <h5>Little Wine Shop</h5>
                    <p>Mock Wine Shop using React, Bootstrap, JavaScript,
                      MongoDB, and CSS</p>
                    <p className="text-sm">This project is a work in progress.</p>
                  </div>
                  <div className="mt-4 ">
                    <Link legacyBehavior href="https://github.com/zdotg/little_wine_shop">
                      <a className="px-4 py-2 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200 ">View Code</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
            <div className="flex flex-col h-full mb-3 mx-auto overflow-hidden border-solid border-4 border-indigo-200 p-2 rounded-md">
              <Image
                src={photography}
                className="w-full h-1/2  object-cover"
                alt="Photography Portfolio"
                priority
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h5>Photography Portfolio</h5>
                    <p>Personal photography portfolio.</p>
                    <p className="text-sm">This project is a work in progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

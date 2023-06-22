'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark' ? true : false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        let htmlClasses = document.querySelector('html').classList;
        if(isDarkMode) {
          htmlClasses.remove('dark');
          localStorage.removeItem('theme')
          setIsDarkMode(false);
        } else {
          htmlClasses.add('dark');
          localStorage.theme = 'dark';
          setIsDarkMode(true);
        }
      });
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-slate-900 p-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-light text-stone-700 cursor-pointer dark:text-slate-100">
            Zach <span className="text-gradient">Gallman</span>;
          </div>
        </Link>
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} className="text-stone-700" />
        </button>
        <div className={`md:flex items-center ${isOpen ? '' : 'hidden'}`}>
          <ul className="md:flex space-x-4 nav-gradient">
            <li className="nav-item">
              <Link href="#About">
                <div className="text-stone-700 cursor-pointer">About Me</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Skills">
                <div className="text-stone-700 cursor-pointer">Skills & Certifications</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Portfolio">
                <div className="text-stone-700 cursor-pointer">Portfolio</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Contact">
                <div className="text-stone-700 cursor-pointer">Contact Me</div>
              </Link>
            </li>
          </ul>
          <button id="themeToggle" className="text-gradient font-bold py-2  px-4 rounded inline-flex items-center">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2 text-purple-500"/>
              <span className="pl-2">{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

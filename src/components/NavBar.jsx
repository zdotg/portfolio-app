'use client'

import React from "react";
import Link from "next/link";
import { useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    let themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        let htmlClasses = document.querySelector('html').classList;
        if(localStorage.theme == 'dark') {
          htmlClasses.remove('dark');
          localStorage.removeItem('theme')
          document.getElementById('themeIcon').classList.remove('fa-sun');
          document.getElementById('themeIcon').classList.add('fa-moon');
          document.querySelector('#themeToggle span').innerText = 'Switch to Dark Mode';
        } else {
          htmlClasses.add('dark');
          localStorage.theme = 'dark';
          document.getElementById('themeIcon').classList.remove('fa-moon');
          document.getElementById('themeIcon').classList.add('fa-sun');
          document.querySelector('#themeToggle span').innerText = 'Switch to Light Mode';
        }
      });
    }

    if(localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.getElementById('themeIcon').classList.remove('fa-moon');
      document.getElementById('themeIcon').classList.add('fa-sun');
      document.querySelector('#themeToggle span').innerText = 'Switch to Light Mode';
    }
  }, []);

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
          <span className="fas fa-bars text-stone-700"></span>
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
          <button id="themeToggle" className=" text-gradient font-bold py-2  px-4 rounded inline-flex items-center">
              <i id="themeIcon" className="fas fa-moon"></i>
              <span className="pl-2">Switch to Dark</span>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

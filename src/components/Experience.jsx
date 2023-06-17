'use client'

import React, { useState } from 'react';


const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark:bg-slate-800 bg-white">
        <div className="flex-col rounded items-center justify-center dark:bg-slate-600 dark:rounded dark:border-none
        px-12 py-5 w-10/12  mx-auto border flex text-center bg-indigo-50 text-slate-700">
        <button onClick={toggleDropdown} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium place-content-center hover:scale-105 transition-transform duration-200">
            Experience
        </button>

        <div className={`w-1/2 pt-5 px-4 dark:text-slate-100 ${isOpen ? '' : 'hidden'}`}>
            <table className="border-none">
            <thead>
                <tr>
                <th className="border border-none">
                    <h4 className="text-center font-normal">
                    <span className="text-gradient border-style-one ">Job</span> Experience
                    </h4>
                </th>
                <th className="border-none font-light">Tenure</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white">
                <tr>
                <td className="border border-none pr-4...">Crocodile Wine - Wine Sales Specialist</td>
                <td className="border border-none ...">2021-present</td>
                </tr>
                <tr>
                <td className="border border-none pr-4 ...">Windsor Boutique Hotel - Hotel Concierge</td>
                <td className="border border-none ...">2020-present</td>
                </tr>
                <tr>
                <td className="border border-none pr-4...">Wine Sales Specialist</td>
                <td className="border border-none ..">2018-present</td>
                </tr>
                <tr>
                <td className="border border-none pr-4...">Bottle Riot - Bartender</td>
                <td className="border border-none ...">2017-2019</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div className={`w-1/2 pt-5 dark:text-slate-100 ${isOpen ? '' : 'hidden'}`}>
            <table className="border border-none">
            <thead>
                <tr>
                <th className="border border-none px-3">
                    <h4 className="text-center font-normal">
                    <span className="text-gradient border-style-one">Academic</span> Qualifications
                    </h4>
                </th>
                <th className="border border-none px-3 font-light">Graduated</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white pt-3">
                <tr>
                <td className="border border-none px-3...">
                    NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
                </td>
                <td className="border border-none px-3 ...">May 2023</td>
                </tr>
                <tr>
                <td className="border border-none px-3 ...">B.S. from The University of Montevallo</td>
                <td className="border border-none px-3 ...">May 2013</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );
};

export default Experience;

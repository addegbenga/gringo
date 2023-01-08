import React from 'react';
import { NavLink } from 'react-router-dom';

import RMKGreen from '../assets/images/GreenLogo.png';
import RMK from '../assets/images/RMK2023Whiter.png';

const Navbar = ({ location }) => {
  const { pathname } = location;
  return (
    <nav
      className={`w-full py-3 lg:px-20 px-5 flex flex-col lg:justify-between lg:flex-row items-center ${
        pathname === '/home' ? 'text-white' : 'text-black'
      }`}
    >
      <NavLink to="/" className="w-24 md:mr-20 mb-5 text-right  cursor-pointer">
        <img src={pathname === '/home' ? RMK : RMKGreen} alt="logo" />
      </NavLink>
      <ul className="flex lg:flex-row flex-col items-center uppercase text-sm">
        <NavLink
          to="/home"
          exact
          className="md:mr-10 mb-5 lg:mb-0 cursor-pointer"
        >
          Home
        </NavLink>
        <NavLink
          to="priorities"
          className="md:mr-10 mb-5 lg:mb-0 cursor-pointer"
        >
          priorities
        </NavLink>
        <NavLink
          to="volunteer"
          className="md:mr-10 mb-5 lg:mb-0 cursor-pointer"
        >
          Manifesto
        </NavLink>

        <NavLink to="/news" className="md:mr-10 mb-5 lg:mb-0 cursor-pointer">
          Events and News
        </NavLink>
        <NavLink to="/about" className="md:mr-10 mb-5 lg:mb-0 cursor-pointer">
          The Duo
        </NavLink>
        <NavLink to="/news" className="md:mr-10 mb-5 lg:mb-0 cursor-pointer">
          Projects
        </NavLink>
        <NavLink
          to="/donate"
          className="bg-red-600 py-3 px-10 hover:bg-blue-500 transition-all focus:bg-green-500 rounded-md text-white"
        >
          DONATE
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

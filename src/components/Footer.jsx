import React from 'react';

import LogoWhite from '../assets/images/RMK2023Whiter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="lg:pl-20 md:mt-10 lg:p-0 py-5 px-5 bg-gray-300 flex lg:flex-row flex-col items-center justify-between">
        <form className="py-3">
          <input
            type="email"
            className="px-4 py-4 rounded-lg md:border-r-2 border-gray-200 text-gray-600 md:rounded-tl-2xl md:rounded-bl-2xl outline-left-none md:px-8 focus:shadow-xl"
            placeholder="Email"
          />
          <input
            style={{ width: '329px' }}
            type="text"
            className="px-4 py-4 rounded-lg text-gray-600 active:border-0 md:px-8 rounded-tr-md rounded-br-md focus:shadow-xl mb-4"
            placeholder="State"
          />
          <button
            style={{ marginLeft: '-6.8rem' }}
            className="mt-5 bg-red-600 text-white px-6 py-4 rounded-tr-md rounded-br-md"
          >
            SIGN UP
          </button>
        </form>
        <p className="uppercase w-full rounded-lg lg:w-1/3 text-white text-center py-4 px-2 md:py-10 md:px-5 bg-red-600">
          become a volunteer
        </p>
      </section>
      <section className="w-screen footer opa px-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 text-white flex flex-col items-center text-center">
            <img src={LogoWhite} alt="Logo white" />
            <p className="my-5 md:my-10">
              <span className="block">Kwankwaso-Idahosa for President</span>
              <span>No. 2, Babacar Ndiaye ADB Close, Asokoro, FCT Abuja</span>
            </p>
            <p>
              <span className="text-red-500 block">
                Phone: <span className="text-white"> +234 8023730226</span>{' '}
              </span>
              <span className="text-red-500">E-mail:</span> info@rmkidahosa.org
            </p>
          </div>

          <div className="mb-10">
            <h2 className="uppercase text-xl mb-10 font-bold text-white">
              Quick Links
            </h2>
            <NavLink to="/" className="block font-thin mb-2 text-red-500">
              Home
            </NavLink>
            <NavLink to="/about" className="block font-thin mb-2 text-red-500">
              Priorites
            </NavLink>
            <NavLink to="/career" className="block font-thin mb-2 text-red-500">
              Events and News
            </NavLink>
            <NavLink
              to="/courses"
              className="block font-thin mb-2 text-red-500"
            >
              About RMK
            </NavLink>
            <NavLink to="/blog" className="block font-thin text-red-500">
              Become a Volunteer
            </NavLink>
          </div>

          <div>
            <h2 className="uppercase  text-xl mb-10 font-bold text-white">
              Connect with us
            </h2>
            <FontAwesomeIcon
              className="text-white text-2xl mr-7"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="text-white text-2xl mr-7"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="text-white text-2xl mr-7"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-white text-2xl mr-7"
              icon={faYoutube}
            />
          </div>
        </div>
      </section>
      <footer
        style={{ background: '#020D31' }}
        className="px-20 py-10 text-center text-white font-bold"
      >
        RMK-Idahosa - 2023 ELECTION CAMPAIGN
      </footer>
    </>
  );
};

export default Footer;

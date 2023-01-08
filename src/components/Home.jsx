import React from "react";

import KwankwasoHome from "../assets/images/kwankwaso_home.jpeg";
import Video from "../assets/images/video.mp4";
import arrowRight from "../assets/images/arrowRight.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
//import { ReactVideo } from 'reactjs-media';
import RMK from "../assets/images/RMK2023Whiter.png";

const Home = () => {
  return (
    <>
      <header
        className="w-screen h-screen flex flex-col justify-between md:flex-row"
        style={{ background: "#020D31", padding: "0 5rem" }}
      >
        <section className="mr-10">
          <NavLink to="/" className="text-white">
            <img src={RMK} alt="RMK" style={{ marginBottom: "0 15px" }} />
          </NavLink>
          <div className="mt-10">
            <h3
              style={{ color: "#39A453", fontWeight: "600px" }}
              className="font-600 text-3xl"
            >
              Rebirthing a New Nigeria !
            </h3>
            <h3 className="text-6xl text-white w-72 mb-20 mt-3">
              The Face of Hope
            </h3>
            <NavLink
              to="/home"
              style={{
                width: "232px",
                height: "64px",
                padding: "22px 32px",
              }}
              className="block flex items-center justify-between hover:bg-blue-400 transition-all bg-red-500 text-white rounded-md"
            >
              Go to the website
              <img
                src={arrowRight}
                alt="right"
                style={{ width: "12.73px", height: "7.78px" }}
              />
            </NavLink>
          </div>
          <div className="mt-10">
            <NavLink to="/facebook.com/yahaya">
              <FontAwesomeIcon
                className="mr-7 text-2xl text-white hover:text-blue-700"
                icon={faFacebook}
              />
            </NavLink>
            <NavLink to="twitter.com/yahaya">
              <FontAwesomeIcon
                className="mr-7 text-2xl text-white hover:text-blue-500"
                icon={faTwitter}
              />
            </NavLink>
            <NavLink to="instagram.com/yahaya.com">
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-pink-900"
                icon={faInstagram}
              />
            </NavLink>
          </div>
        </section>
        <section className="flex h-full">
          <img
            className="h-full"
            style={{
              width: "600px",
              height: "789px",
              borderRadius: "300px 0 0 0",
            }}
            src={KwankwasoHome}
            alt="Yahaya Bello"
          />
          <div className="h-full w-5 bg-green-500"></div>
          <div className="h-full w-5 bg-white"></div>
          <div className="h-full w-5 bg-blue-500"></div>
        </section>
      </header>
      {/* <section className='mb-20' style={{ height: '500px' }}>
                <ReactVideo
                    src={Video}
                    className='filter drop-shadow-md md:drop-shadow-xl'
                />

        <video src={Video} width="100%" height="200" controls="controls" autoplay="true"/>

            </section> */}

      <section className="text-center mt-10">
        <h2 className="mb-10 font-bold text-2xl" style={{ color: "#020D31" }}>
          Want to be part of the Movement?
        </h2>
        <form className="w-3/5 mx-auto">
          <div className="text-center grid w-full mb-5 md:rows-2 lg:grid-cols-2 md:gap-2">
            <div>
              <input
                type="text"
                className="mb-5 px-4 text-gray-600 landing__input border-2 border-gray-500 rounded-2xl outline-none focus:shadow-xl"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="number"
                id="bid_percentage"
                className="px-4 text-gray-600 landing__input border-2 border-gray-500 rounded-2xl outline-none focus:shadow-xl"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="text-center grid w-full mb-5 md:rows-2 lg:grid-cols-2 md:gap-2">
            <div>
              <input
                type="email"
                className="mb-5 landing__input px-4 text-gray-600 border-2 border-gray-500 rounded-2xl outline-none focus:shadow-xl"
                placeholder="Email"
              />
            </div>
            <div className="ml-5">
              <button className="landing_page_btn flex justify-center hover:bg-blue-500 transition-all  items-center text-white">
                YES, I’M IN
                <img
                  className="ml-7"
                  src={arrowRight}
                  alt="arrow"
                  style={{
                    width: "12.73px",
                    height: "7.78px",
                  }}
                />
              </button>
            </div>
          </div>
        </form>
      </section>
      <footer
        className="py-10 px-20"
        style={{
          background: "#020D31",
          borderRadius: "96px 96px 0px 0px",
        }}
      >
        <p className="text-center text-white">
          RABI'U MUSA KWANKWASO - 2023 ELECTION CAMPAIGN
        </p>
      </footer>
    </>
  );
};

export default Home;

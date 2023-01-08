import React, { useState } from "react";

import PoliticianImage from "../assets/icons/Vector1.svg";

import SecurityImage from "../assets/icons/Vector3.svg";
import JobsImage from "../assets/icons/Vector4.svg";
import ElectricyImage from "../assets/icons/Vector5.svg";
import EconomicRecImage from "../assets/icons/Vector6.svg";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "./UI/Modal/Modal";

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Navbar from "./Navbar";
import { withRouter } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LandingPage = (props) => {
  const [state, setState] = useState(false);

  const handleSubmit = (e) => {
    e.preventeDefault();
    setState(!state);
  };
  return (
    <>
      <header className="w-screen m-0 bg-bannerImage">
        <Navbar {...props} />
        <section className="lg:w-2/3 mt-20 ml-5 lg:ml-20">
          <h1 className="mb-2 w-2/3 uppercase text-white lg:text-4xl text-lg font-bold">
            Together, we will move Nigeria Forward!
          </h1>
          <p className="text-white w-2/3 mb-4">
            Become a part of our team and learn how you can take part in
            creating a better Nigeria.
          </p>
          <form className="mx-auto mt-2">
            <input
              type="email"
              className="px-4 mb-5 py-3 md:py-4  rounded-lg border-r-2 md:rounded-tr-none md:rounded-br-none border-gray-200 text-gray-600 md:rounded-md md:rounded-tl-2xl md:rounded-bl-2xl outline-left-none md:px-8 focus:shadow-xl"
              placeholder="Email"
            />
            <input
              style={{ width: "329px" }}
              type="text"
              className="px-4 py-3 md:py-4 text-gray-600 active:border-0 md:px-8 rounded-md md:rounded-tr-md md:rounded-br-md focus:shadow-xl md:rounded-tl-none md:rounded-bl-none "
              placeholder="State"
            />
            <button
              onSubmit={handleSubmit}
              style={{ marginLeft: "-6.8rem" }}
              className="mt-2 bg-red-600 text-white px-6 py-3 md:py-4 rounded-tr-md rounded-br-md"
            >
              SIGN UP
            </button>
          </form>
          <Modal show={state}>
            <p>
              Thank you for signing up to be part of the team and recieve
              regular updates. You shall receive an email shortly.
            </p>
          </Modal>
        </section>

        <section className="grid lg:grid-cols-3 justify-items-center lg:px-20 px-10">
          <div
            className="relative lg:w-3/4 w-full mb-5 rounded-lg text-white flex flex-col items-center justify-center text-center"
            style={{
              top: "13rem",
              left: "0",
              right: "0",
              height: "232px",
              background: "#020D31",
            }}
          >
            <img className="w-10 h-10" src={PoliticianImage} alt="Politician" />
            <h3 className="my-3">OUR CAMPAIGN</h3>
            <h5>See all our dates and venues</h5>
          </div>

          <div
            className="relative lg:w-3/4 w-full mb-5 rounded-lg text-white flex flex-col items-center justify-center text-center"
            style={{
              top: "13rem",
              height: "232px",
              background: "#020D31",
            }}
          >
            <img className="w-10 h-10" src={PoliticianImage} alt="Politician" />
            <h3 className="my-3">ATTEND EVENTS</h3>
            <h5>Find Events Near You</h5>
          </div>

          <div
            className="relative lg:w-3/4 w-full rounded-lg text-white flex flex-col items-center justify-center text-center"
            style={{
              top: "13rem",
              height: "232px",
              background: "#E52B32",
            }}
          >
            <img className="w-10 h-10" src={PoliticianImage} alt="Politician" />
            <h3 className="uppercase my-3">GET INVOLVED</h3>
            <h5>Become a Volunteer Today</h5>
          </div>
        </section>
      </header>

      <section
        className="lg:px-20 px-10 py-10 text-center"
        style={{ marginTop: "14rem" }}
      >
        <div className="text-center lg:w-1/2 w-full mx-auto mb-10">
          <h2 className="text-2xl mb-5 font-bold" style={{ color: "#020D31" }}>
            Kwankwaso’s Priorities
          </h2>
          <p>
            In the bid to move the nation forwad, to a better Nigeria for all,
            Kwankwaso and his team has placed some pressing issues facing the
            countries as top priorities . Here is a brief list of the issues
            that needs to be tackled
          </p>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-container"
          dotListClass=""
          draggable={false}
          focusOnSelect={false}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          keyBoardControl={true}
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <article
            className="feature md:w-5/6 sm:w-2/3 text-center"
            style={{ width: "281px" }}
          >
            <img
              className="w-full m-auto"
              src={SecurityImage}
              alt="Career Development Section"
            />
            <h3 className="text-left text-sm font-bold my-4 uppercase">
              Security of the Nation
            </h3>
            <p className="text-left text-sm">
              The situation Nigeria finds itself today is fast drifting from
              mere concern to hopelessness. It is a fact that the contemporary
              global environment is increasingly volatile, uncertain, complex,
              and ambiguous...
            </p>
            <button className="block text-md text-lg text-left mt-5 text-red-500">
              Read more
            </button>
          </article>

          <article
            className="feature md:w-5/6 sm:w-2/3 text-center"
            style={{ width: "281px" }}
          >
            <img
              className="w-full m-auto"
              src={JobsImage}
              alt="Trainings Section"
            />
            <h3 className="text-left text-sm font-bold my-4 uppercase">
              Economy
            </h3>
            <p className="text-left text-sm">
              Our economic plan is about you, and is centered on you! because at
              every stage of your life from birth to school years to career
              development and business, to family and getting old and up to your
              retirement life, everything you do depends on a sound and strong
              economy...
            </p>
            <button className="block text-md text-lg text-left mt-5 text-red-500">
              Read more
            </button>
          </article>

          <article
            className="feature md:w-5/6 sm:w-2/3 text-center"
            style={{ width: "281px" }}
          >
            <img
              className="w-full m-auto"
              src={ElectricyImage}
              alt="Small and medium sized enterpises section"
            />
            <h3 className="text-left text-sm font-bold my-4">Education</h3>
            <p className="text-left text-sm">
              Our actions and programmes in the education sector will be guided
              by our philosophy of ‘Education as Public Good...
            </p>
            <button className="block text-md text-lg text-left mt-5 text-red-500">
              Read more
            </button>
          </article>

          <article
            className="feature md:w-5/6 sm:w-2/3 text-center"
            style={{ width: "281px" }}
          >
            <img
              className="w-full m-auto"
              src={EconomicRecImage}
              alt="Courses Section"
            />
            <h3 className="text-left text-sm font-bold my-4 uppercase">
              On Economy: Getting Out Of Recession
            </h3>
            <p className="text-left text-sm">
              Kwankwaso’s top prioriy for the country revolves around the
              ongrowing insecurity of the nation by working tirelessly to
              curb...
            </p>
            <button className="block text-md text-lg text-left mt-5 text-red-500">
              Read more
            </button>
          </article>
        </Carousel>
        <button className="uppercase my-5 bg-red-600 text-white px-6 ml-2 py-4 rounded-2xl">
          see all priorities
        </button>
      </section>

      <section className="lg:px-20 px-5 py-10">
        <h3
          style={{ color: "#020D31" }}
          className="font-bold mb-5 text-4xl text-indigo-500 text-center"
        >
          Events and News
        </h3>
        <article className="flex lg:flex-row flex-col">
          <div
            style={{ height: "360px" }}
            className="lg:w-1/2 w-full speech p-5 text-white flex flex-col justify-between"
          >
            <div className="header">
              <h4 className="font-thin">Latest news</h4>
              <p className="my-3">INEC Sets Official Date For 2023 Election</p>
              <span className="font-thin">May 5th, 2021</span>
            </div>
            <a href="#">Read More</a>
          </div>

          <div className="lg:w-2/4 w-full bg-blue-500 text-white flex p-5 flex-col justify-between">
            <div className="header">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <a href="#">Follow Kwankwaso/Idahosa on twitter</a>
          </div>

          <div className="lg:w-2/4 w-full bg-blue-900 text-white flex p-5 flex-col justify-between">
            <div className="header">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <a href="#">Follow Kwankwaso/Idahosa on facebook</a>
          </div>
        </article>

        <article
          className="flex lg:flex-row flex-col"
          style={{ height: "360px" }}
        >
          <div
            style={{ background: "#020D31" }}
            className="lg:w-2/4 w-full bg-black p-5 text-white flex flex-col justify-between"
          >
            <div className="header">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            {/* <img
                            className='bg-campaign'
                            style={{ height: '207px', width: '347px' }}
                            alt='video'
                        /> */}
            <a href="#">View more videos</a>
          </div>

          <div className="lg:w-2/4 w-full bg-red-500 flex p-5 text-white flex-col justify-between">
            <div className="header">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <a href="#">Follow Kwankwaso/Idahosa on instagram</a>
          </div>

          <div
            className="lg:w-2/4 w-full flex p-5 flex-col text-white justify-between"
            style={{ background: "#020D31" }}
          >
            <div className="header">
              <h3 className="uppercase">upcoming events</h3>
              <div className="my-4 flex">
                <div
                  className="card__header mr-4 bg-white p-3 text-black text-center"
                  style={{ width: "72px", height: "72px" }}
                >
                  <span className="block">MAY</span>
                  <span className="block">20</span>
                </div>
                <div className="card__body">
                  <h4>Campaign Movement from Location to Location</h4>
                  <span className="font-thin">10.00am - 6.00pm</span>
                </div>
              </div>
              <div className="my-4 flex">
                <div
                  className="card__header mr-4 bg-white p-3 text-black text-center"
                  style={{ width: "72px", height: "72px" }}
                >
                  <span className="block">MAY</span>
                  <span className="block">20</span>
                </div>
                <div className="card__body">
                  <h4>Campaign Movement from One Location to Another</h4>
                  <span className="font-thin">10.00am - 6.00pm</span>
                </div>
              </div>
            </div>
            <a href="#">Follow Kwankwaso/Idahosa on facebook</a>
          </div>
        </article>
      </section>

      <section
        className="bg-footerImage flex mt-8 items-center px-20"
        style={{ height: "500px" }}
      >
        <div className="lg:w-2/3 w-full text-left">
          <h1 style={{ color: "#020D31" }} className="text-4xl font-bold">
            Meet Dr. Rabiu Musa Kwankwaso & <br></br>Bishop Isaac Idahosa
          </h1>
          <p style={{ color: "#020D31" }} className="lg:w-3/4 text-sm my-5">
            Dr. Rabiu Musa Kwankwaso He was born on October 21, 1956, to a
            Muslim Hausa family in Kwankwaso, a village near Madobi. His father
            was the District Head of Madobi, Majidadin Kano. He attended
            Kwankwaso Primary School, and later Gwarzo Senior Primary School. He
            moved to the Wudil Craft School, and Kano Technical College.
          </p>
          <button className="block uppercase bg-red-600 text-white px-6 ml-2 py-4 rounded-md">
            read more
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(LandingPage);

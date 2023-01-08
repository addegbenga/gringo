import React from 'react';

import SecurityImage from '../assets/icons/Vector3.svg';
import HandWork from '../assets/icons/Vector4.svg';
import Healthcare from '../assets/images/healthcare.jpeg';

import Footer from './Footer';
import Navbar from './Navbar';
import { withRouter, NavLink } from 'react-router-dom';

const Priorities = (props) => {
  return (
    <>
      <Navbar {...props} />
      <section className="w-screen padding priorities mt-20 lg:m-0 mb-10 py-10 flex items-end text-white px-3">
        <div className="w-full lg:w-2/4">
          <h2 className="font-bold text-3xl">Our Top Priorities</h2>
          <p className="font-thin">
            In the bid to move the nation forwad, to a better Nigeria for all,
            Dr. Rabiu Musa kwankwaso and his team has placed some pressing
            issues facing the countries as top priorities . Here is a brief list
            of the issues that needs to be tackled.
          </p>
        </div>
      </section>

      <section className="grid padding lg:grid-cols-3 md:grid-cols-2 place-content-center gap-0 justify-items-center mt-10 text-center">
        <article style={{ width: '281px' }} className="text-center mb-10 group">
          <div className="w-full">
            <img
              className="w-full m-auto"
              src={SecurityImage}
              alt="Career Development Section"
              // style={{ zIndex: '1' }}
            />
          </div>
          <h3 className="text-left group-hover:bg-green-100 text-sm font-bold my-4 uppercase">
            Security of the Nation
          </h3>
          <p className="text-left text-sm">
            The situation Nigeria finds itself today is fast drifting from mere
            concern to hopelessness. It is a fact that the contemporary global
            environment is increasingly volatile, uncertain, complex, and
            ambiguous...
          </p>
          <NavLink
            to="/priority/security"
            className="block text-lg text-xs font-semibold text-left mt-5 text-red-500"
          >
            Read more
          </NavLink>
        </article>

        <article
          style={{ width: '281px' }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
          <img
            className="w-full m-auto"
            src={HandWork}
            alt="Career Development Section"
          />
          <h3 className="text-left text-sm font-bold my-4 uppercase">
            Economy
          </h3>
          <p className="text-left text-sm">
            Our economic plan is about you, and is centered on you! because at
            every stage of your life from birth to school years to career
            development and business, to family and getting old and up to your
            retirement life, everything you do depends on a sound and strong
            economy.
          </p>
          <NavLink
            to="/priority/security"
            className="block text-lg text-md font-semibold text-left mt-5 text-red-500"
          >
            Read more
          </NavLink>
        </article>

        <article
          style={{ width: '281px' }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
          <img
            className="w-full m-auto"
            src={Healthcare}
            alt="Career Development Section"
          />
          <h3 className="text-left text-sm font-bold my-4 uppercase">
            Healthcare
          </h3>
          <p className="text-left text-sm">
            Nigeria, like other developing countries has its share of health
            problems. Communicable and infectious diseases remain the major
            health problem in the country. While contemporary demographic
            transition ushers in a range of non-communicable diseases too.
          </p>
          <NavLink
            to="/priority/security"
            className="block text-lg text-md font-semibold text-left mt-5 text-red-500"
          >
            Read more
          </NavLink>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default withRouter(Priorities);

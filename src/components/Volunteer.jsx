import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Volunteer = (props) => {
  return (
    <>
      <Navbar {...props} />
      <section className="h-full lg:px-64 py-10 flex items-center justify-center bg-flag">
        <div className="volunteer__form p-5">
          <h2 style={{ color: '#020D31' }}>DONATE</h2>
          <form className="mt-10">
            <div className="w-full">
              <label for="email">Amount*</label>
              <input
                type="number"
                id="amount"
                class="w-full px-4 py-4 text-gray-600 border-2 my-3 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                placeholder="1000"
              />
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="mb-5">
                <label htmlFor="first_name" className="font-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 my-3 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="Ahmed"
                />
              </div>

              <div class="mb-5">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 my-3 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="Yusuf"
                />
              </div>
            </div>
            <div className="w-full">
              <label for="email">Email*</label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-4 text-gray-600 border-2 my-3 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                placeholder="example@example.com"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-2">
              <div class="mb-5">
                <label for="first_name">Phone No. *</label>
                <input
                  type="text"
                  id="first_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 my-3 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="0706 254 2688"
                />
              </div>

              <div class="mb-5">
                <label for="last_name">State</label>
                <input
                  type="text"
                  id="last_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 my-3 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="Anambra"
                />
              </div>
            </div>
            <button className="w-full uppercase font-bold text-lg text-center mt-10 text-white volunteer__form__btn">
              DONATE
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(Volunteer);

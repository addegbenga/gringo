import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from './Navbar';
import KwankwasoAbout from '../assets/images/kwankwasoAbout.jpeg';
import Idahosa from '../assets/images/idahosa.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

const About = (props) => {
  return (
    <>
      <Navbar {...props} />
      <section className="w-screen about h-60 px-20 m5-10 py-10 flex items-center text-white">
        <p className="font-bold text-3xl ">About Sen. Rabiu Musa Kwankwaso</p>
      </section>
      <section className="md:px-24 px-12 mb-9">
        <div className="biography w-full flex md:grid flex-col items-center md:items-start md:grid-cols-2">
          <figure className="h-100 md:mr-6 my-10" style={{ width: '60%' }}>
            <img src={KwankwasoAbout} className="w-full h-full" alt="about" />
          </figure>
          <div className="md:my-10">
            <h3
              style={{ color: '#020D31' }}
              className="font-bold text-3xl text-center md:text-left"
            >
              Biography
            </h3>
            <div className="">
              <p className="md:my-10 my-4">
                He was born on October 21, 1956, in a village near Madobi. His
                father was the District Head of Madobi, Majidadin Kano. He
                attended Kwankwaso Primary School, and later Gwarzo Senior
                Primary School. He moved to the Wudil Craft School, and Kano
                Technical College. He was an active student’s leader and an
                elected official of the Kano State Students Association at the
                Kaduna Polytechnic He earned a postgraduate degree in
                Engineering at the Middlesex Polytechnic in the United Kingdom
                from 1982 to 1983 and a Master’s degree in Water Engineering at
                the Loughborough University of Technology in 1985 1975-1992 H.E
                Kwankwaso Started his Public Service Career 2007-2010 Sen.
                Kwankwaso was appointed as a Special Envoy to Darfur He served
                as a Special Envoy to Somalia and Darfur (2007) He was a Board
                Member,at the Niger Delta Development Commission (NDDC)
                2011-2015 Dr. Rabiu Musa Kwankwaso returned as Governor of Kano
                State. Kwankwaso was re-elected in 2011 as Governor of Kano
                State and, he returned to Government House in full force to
                continue with the great works he started earlier on to the
                benefit of the people of Kano State and the nation at large. He
                contested in the party’s presidential primaries in 2014,
                alongside President Muhammadu Buhari, Alhaji Atiku Abubakar and
                others, putting up a stellar performance. 2016-2022 Sen. Rabiu
                Musa Kwankwaso was elected as Senator of the Federal Republic of
                Nigeria H.E Rabiu Kwankwaso was elected as Senator of the
                Federal Republic of Nigeria Kwankwaso as Senator brought a shift
                in ideas to the Red Chamber - In 2020, Senator Kwankwaso
                together with a group of friends and political associates
                started The National Movement, TNM, which later in March 2022
                fused together with the New Nigeria Peoples’ Party, NNPP, the
                party that has elected him to fly its flag as its presidential
                candidate.
              </p>

              <p>
                In 1992-1999 Kwankwaso was elected into the Parliament To the
                House of Representatives in 1992, representing the Madobi
                Federal Constituency. His subsequent election as the House’s
                Deputy Speaker ushered him into the National spotlight. Elected
                as a delegate from Kano to the 1995 Constitutional Conference as
                a member of Yar’adua’s People’s Democratic Movement. - He then
                joined the political transition program, the Democratic Party of
                Nigeria (DPN) - In a keenly contested party primaries for
                Governorship of Kano State, in 1999 under the platform of the
                PDP, Kwankwaso won, defeating his opponents hands down.
                1999-2007 Kwankwaso was elected as Governor of Kano State.
              </p>
            </div>
            <div>
              <p className="mb-3">Follow me on:</p>
              <FontAwesomeIcon
                className="text-blue-500 text-2xl mr-7"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="text-red-200 text-2xl mr-7"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="text-blue-400 text-2xl mr-7"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="text-red-500 text-2xl mr-7"
                icon={faYoutube}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen cropped h-60 px-20 m5-10 py-10 flex items-center text-white">
        <p className="font-bold text-3xl ">About Dr. Bishop Isaac Idahosa</p>
      </section>
      <section className="md:px-24 px-12 mb-9">
        <div className="biography w-full flex md:grid flex-col items-center md:items-start md:grid-cols-2">
          <figure className="h-100 md:mr-6 my-10" style={{ width: '60%' }}>
            <img src={Idahosa} className="w-full h-full" alt="about" />
          </figure>
          <div className="md:my-10">
            <h3
              style={{ color: '#020D31' }}
              className="font-bold text-3xl text-center md:text-left"
            >
              Biography
            </h3>
            <div className="">
              <p className="md:my-10 my-4">
                Bishop Isaac Idahosa is a senior pastor and presiding bishop of
                God First Ministry, also known as Illumination Assembly, is
                Bishop Isaac Idahosa. God First Ministry is located in Ajah,
                Lagos, at the Lekki Light Centre (LLC), a little-known church he
                founded in the Niger State city of Minna more than 25 years ago.
                He is married to Bishop Margaret Benson-Idahosa. Christabel and
                Osagie. The third of a total of six children, Bishop Isaac
                Idahosa was born. He serves as Chris Okafor’s spiritual father.
                Hearing from God is the meaning of his name, Idahosa. In 2022,
                Bishop Isaac Idahosa was chosen by Rabiu Kwankwaso, the
                presidential candidate for the New Nigeria Peoples Party (NNPP),
                to be his running-mate for the 2023 Presidential Election.
              </p>
            </div>
            <div>
              <p className="mb-3">Follow me on:</p>
              <FontAwesomeIcon
                className="text-blue-500 text-2xl mr-7"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="text-red-200 text-2xl mr-7"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="text-blue-400 text-2xl mr-7"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="text-red-500 text-2xl mr-7"
                icon={faYoutube}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default withRouter(About);

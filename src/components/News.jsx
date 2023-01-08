import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import LayerHausa from '../assets/images/LayerHausa.png';
import LayerIgbo from '../assets/images/LayerIgbo.png';
import LayerYoruba from '../assets/images/LayerYoruba.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import Footer from './Footer';

import Navbar from './Navbar';
import { faMarker } from '@fortawesome/free-solid-svg-icons';

const News = (props) => {
    return (
        <>
            <Navbar {...props} />
            <section className='w-screen mb-10 h-60 events px-20 m5-10 py-10 flex items-center text-white'>
                <p className='font-bold text-3xl'>News and Events</p>
            </section>
            <section className='lg:px-20 px:5 grid  lg:grid-cols-3 md:grid-cols-2 place-content-center justify-items-center mt-10'>
                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerIgbo}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Imo State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1 border-red-500 text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerYoruba}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1  text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerHausa}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1  text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerYoruba}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1 text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerHausa}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1  text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerIgbo}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1  text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerYoruba}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1 text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerHausa}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1 border-red-500 text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>

                <article style={{ width: '312px' }} className='mb-10'>
                    <img
                        className='w-full m-auto rounded-md'
                        src={LayerIgbo}
                        alt='Career Development Section'
                    />
                    <h3 className='text-left text-sm font-bold my-4 uppercase'>
                        Presidential Ralley
                    </h3>
                    <div className='w-full' style={{ color: '#020D31' }}>
                        <span className='block mb-5'>
                            <FontAwesomeIcon className='mr-5' icon={faMarker} />
                            Kogi State
                        </span>
                        <span className='block'>
                            <FontAwesomeIcon
                                className='mr-5'
                                icon={faCalendar}
                            />
                            24th May, 2022 * 10th August, 2020 *
                            <span className='block'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19th
                                December, 2022.
                            </span>
                        </span>
                    </div>
                    <div className='w-full flex'>
                        <NavLink
                            to='/volunteer'
                            style={{ width: '50%' }}
                            className='text-sm rounded-bl-3xl py-2 px-4 text-center text-white mt-5 bg-red-500'>
                            I want to volunteer
                        </NavLink>
                        <button
                            style={{ width: '50%' }}
                            className='text-sm rounded-br-3xl py-2 px-4 border-2 border-red-500 text-center text-red-500 border-1 border-red-500 text-white mt-5'>
                            I want to Attend
                        </button>
                    </div>
                </article>
            </section>
            <Footer />
        </>
    );
};

export default withRouter(News);

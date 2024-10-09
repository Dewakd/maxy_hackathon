import { Icon } from '@iconify/react';
import React from 'react';
// import logo from '/assets/logo.png'

export default function Footer(props) {
    const { isOpen } = props;

    return (
        <div className="bg-dark text-white py-[60px]">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-[auto,1fr,1fr] xl:gap-8">
                    <div className="space-y-8 xl:col-span-1 xl:w-[300px]">
                        <h1 className='text-3xl text-light'>Desa Leuwimalang</h1>
                        {/* <img
                            className="h-16"
                            src="" // Path to your logo
                            alt="Company Logo"
                        /> */}
                        <p className="text-base text-light font-geo">
                            © 2024. All rights reserved.<br />
                            Developed by Dewa & Christian<br/>
                            Designed by Christian & Elang 
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3 sm:gap-6 xl:mt-0 xl:col-span-2">
                        <div>
                            <h3 className="text-lg font-bold text-light font-geo">About us</h3>
                            <ul className="mt-4 space-y-4">
                                <li><a href="#" className="text-base text-light hover:text-darkLight">About Leuwimalang</a></li>
                                <li><a href="#" className="text-base text-light hover:text-darkLight">Meet the organizer</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-light font-geo">FAQ</h3>
                            <ul className="mt-4 space-y-4">
                                <li><a href="#" className="text-base text-light hover:text-darkLight">How to accses Leuwimalang</a></li>
                                <li><a href="#" className="text-base text-light hover:text-darkLight">Minimum Spending</a></li>
                                <li><a href="#" className="text-base text-light hover:text-darkLight">What can i get</a></li>
                            </ul>
                        </div>
                        <div className="w-auto sm:col-span-1">
                            <h3 className="text-lg font-bold text-light font-geo">Send us email!</h3>
                            <form className="mt-4 sm:flex sm:max-w-md">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full min-w-0 px-4 py-2 text-base placeholder-gray-500 bg-transparent border border-gray-300 shadow-sm appearance-none h-14 text-text focus:outline-none"
                                    placeholder="Your Email"
                                />
                                <div className="relative mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className={`h-8 text-darkBold absolute right-4 -top-[3.5rem] sm:top-3 border-l border-light pl-3 z-10 ${isOpen ? 'border-opacity-15' : 'border-opacity-100'}`}
                                        disabled={isOpen ? true : false}
                                    >
                                        <Icon icon="mingcute:send-plane-line" width="1.8rem" height="1.8rem" className={`text-light hover:text-red transition duration-200 mr-0 sm:mr-2 ${isOpen ? 'text-opacity-15' : 'text-opacity-100'}`} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

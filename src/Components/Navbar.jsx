import React from 'react';
import StartComponent from './StartComponent';
import navImg from '../assets/navImg.png'
import CheckActiveBalance from './CheckActiveBalance';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                {/* logo */}
                <div>
                    <img src={navImg} alt="" />
                </div>
            </div>
            <div className='navbar-center hidden lg:block'>
                <div className=" flex  justify-center items-center gap-16">
                    {/* Search  */}
                    <div className=''>
                        <label className="input input-bordered rounded-full flex items-center py-6  gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="text" className="grow" placeholder="Search Your Panel" />
                        </label>
                    </div>

                    <div>

                        {/* Active Balance */}

                        <CheckActiveBalance></CheckActiveBalance>
                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <button className="btn btn-ghost  border-primaryColor">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item bg-primaryColor border-none text-[#ffff]">1</span>
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* Profile  */}
                <div className='hidden lg:block '>
                    <div className='flex gap-5 '>
                        <div className='bg-primaryColor bg-opacity-35 w-11 h-11 rounded-full flex justify-center items-center '>
                            <h1 className='text-2xl text-primaryColor'>o</h1>
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>Shop Name</h1>
                            <p className='text-[12px] text-[#565656]'>5555555</p>
                        </div>
                        <div className='border-2 border-[#5C5C5C] rounded-full flex justify-center items-center h-6 w-6'>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end lg:hidden">
                    <div className=''>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>


            </div>


        </div>
    );
};

export default Navbar;
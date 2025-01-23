import React from 'react';
import logo from '../assets/logoSingle.png'
import Ocadologo from '../assets/ocadologo 2.png'
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoMdSettings } from 'react-icons/io';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoBagAddSharp, IoLogOutSharp } from "react-icons/io5";
import { BsClipboard2PlusFill, BsClipboardPlusFill } from 'react-icons/bs';
import { FaBoxOpen, FaFileInvoiceDollar, FaMoneyCheckAlt } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi2';
import { MdDashboard, MdLogout, MdOutlinePayments } from 'react-icons/md';
import { PiListBulletsFill } from "react-icons/pi";

const SideBar = ({isHovered, setIsHovered}) => {
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };



    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${isHovered ? 'w-[240px]' : 'w-[86px] '
                } flex flex-col justify-between h-screen pb-14  transition-all duration-300 transform px-5 `}
        >

            {/* Top section */}
            <div>
                {/* logo section */}
                <div className='flex justify-center'>
                    <img src={isHovered ? Ocadologo : logo} alt="" />
                </div>

                {/* Menu section */}
                <div className='flex gap-4 justify-center items-center flex-col mt-[40px] '>


                    {/* Dash Board Home Page */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <MdDashboard  className="text-2xl" />
                            </div>
                            <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                                DashBoard
                            </h1>
                        </button>
                    </NavLink>

                    {/* Add Parcel */}
                    <NavLink
                        to="/addParcel"
                        className={({ isActive }) =>
                            `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <IoBagAddSharp  className="text-2xl" />
                            </div>
                            <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                                Add Parcel
                            </h1>
                        </button>
                    </NavLink>



                    {/* Request List */}
                    <NavLink
                        to="/requestList"
                        className={({ isActive }) =>
                            `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <FaBoxOpen className="text-2xl" />
                            </div>
                            <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                                Request List
                            </h1>
                        </button>
                    </NavLink>



                    {/* All Parcel List */}
                    <NavLink
                        to="/allParcelList"
                        className={({ isActive }) =>
                            `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <PiListBulletsFill   className="text-2xl" />
                            </div>
                            <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                                All Parcel
                            </h1>
                        </button>
                    </NavLink>



                    {/* payment Invoice List  */}
                    <NavLink
                        to="/paymentInvoiceList"
                        className={({ isActive }) =>
                            `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <FaFileInvoiceDollar    className="text-2xl" />
                            </div>
                            <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                                Payment Invoice List
                            </h1>
                        </button>
                    </NavLink>

                </div>
            </div>




            {/* Bottom Section */}

            <div className='flex gap-5 justify-center items-center flex-col mt-[40px] text-2xl'>
                {/* settings */}
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                    }
                >
                    <button
                        className="flex justify-start items-center px-4 py-2 gap-4 text-left  hover:text-primaryColor"
                    >
                        <div>
                            <IoMdSettings className="text-2xl" />
                        </div>
                        <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                            Setting
                        </h1>
                    </button>
                </NavLink>


                {/* Logout */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${isActive ? `text-primaryColor border-l-4 border-primaryColor ${isHovered && 'bg-[#E8333036]'} ` : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                    }
                >
                    <button
                        className="flex justify-start items-center px-4 py-2 gap-4 text-left  hover:text-primaryColor"
                    >
                        <div>
                            <IoLogOutSharp className="text-2xl" />
                        </div>
                        <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                            logout
                        </h1>
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default SideBar;
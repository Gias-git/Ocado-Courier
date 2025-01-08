import React from 'react';
import logo from '../assets/logoSingle.png'
import Ocadologo from '../assets/ocadologo 2.png'
import { RxDashboard } from 'react-icons/rx';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsClipboard2PlusFill, BsClipboardPlusFill } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi2';

const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    console.log(isHovered)

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


                    {/* Home Page */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? 'text-primaryColor border-l-4 border-primaryColor' : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <RxDashboard className="text-2xl" />
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
                            `${isActive ? 'text-primaryColor  border-l-4 border-primaryColor' : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <BsClipboardPlusFill className="text-2xl" />
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
                            `${isActive ? 'text-primaryColor  border-l-4 border-primaryColor' : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
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
                            `${isActive ? 'text-primaryColor  border-l-4 border-primaryColor' : ''} w-full hover:bg-[#E8333036] hover:rounded-md`
                        }
                    >
                        <button
                            className="flex justify-start items-center px-4 py-3 gap-4 text-left  hover:text-primaryColor"
                        >
                            <div>
                                <HiDocumentText  className="text-2xl" />
                            </div>
                            <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px]`}>
                                All Parcel
                            </h1>
                        </button>
                    </NavLink>



                </div>
            </div>

            {/* Bottom Section */}

            <div className='flex gap-9 justify-center items-center flex-col mt-[40px] text-2xl'>
                <AiOutlinePoweroff />
                <IoMdSettings />
            </div>
        </div>
    );
};

export default SideBar;
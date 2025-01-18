import React from 'react';
import StartComponent from './StartComponent';
import navImg from '../assets/navImg.png'
import CheckActiveBalance from './CheckActiveBalance';
import { IoIosArrowDown } from 'react-icons/io';
import NotificationModal from './NotificationModal';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBoxOpen, FaCode, FaCog, FaLanguage, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { HiDocumentText } from 'react-icons/hi2';
import { MdOutlinePayments } from 'react-icons/md';
import { BsClipboardPlusFill } from 'react-icons/bs';


const Navbar = ({ isModalOpen, setModalOpen }) => {

    // const [isModalOpen, setModalOpen] = useState(false);
    //    {modal && setModalOpen(modal)}
    const notifications = [
        { date: "01-11-24", message: "This is your first notification message!" },
        { date: "01-11-24", message: "This is your first notification message!" },
        { date: "01-11-24", message: "This is your first notification message!" },
        { date: "01-11-24", message: "This is your first notification message!" },
    ];
    return (
        <div className="navbar  bg-base-100  top-0">
            <div className="navbar-start">
                <div className="dropdown  lg:hidden">
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


                    {/* Dropdown Menu for mobile device*/}
                    <ul tabIndex={0} className="dropdown-content px-6  bg-base-100  z-[1] w-64 mt-5 p-2 shadow space-y-3">

                        {/* DashBoard Link */}
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <RxDashboard className="text-base" />
                                DashBoard
                            </NavLink>
                        </li>

                        <hr />

                        {/* Add Parcel Link */}
                        <li>
                            <NavLink
                                to="/addParcel"
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <BsClipboardPlusFill />
                                Add Parcel
                            </NavLink>
                        </li>


                        <hr />

                        {/* requestList Link */}
                        <li>
                            <NavLink
                                to="/requestList"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <FaBoxOpen />
                                Request List
                            </NavLink>
                        </li>

                        <hr />

                        {/* all ParcelList Link */}
                        <li>
                            <NavLink
                                to="/allParcelList"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <HiDocumentText />
                                All Parcel List
                            </NavLink>
                        </li>

                        <hr />

                        {/* payment Invoice List Link */}
                        <li>
                            <NavLink
                                to="/paymentInvoiceList"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <MdOutlinePayments />
                                payment Invoice List
                            </NavLink>
                        </li>

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


                <button onClick={() => setModalOpen(!isModalOpen)} className="px-3 py-3 rounded-md border-[1px] flex justify-center items-center hover:bg-[#FFF5F5] lg:mr-7   border-primaryColor">

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
                        <span className="badge badge-xs badge-primary indicator-item bg-primaryColor border-none py-2 text-[#ffff]">{notifications.length}</span>
                    </div>
                </button>
                <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn lg:hidden btn-ghost btn-circle">
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
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        
                        {/* Search  */}
                        <div className='min-h-20 flex justify-center items-center'>
                            <label className="input input-bordered  flex items-center py-6  gap-2">
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

                        <div className='flex justify-center items-center'>
                            <button className='bg-primaryColor text-white py-2 px-4 '>Search</button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>


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
                        <div className="dropdown dropdown-end">
                            {/* Dropdown Button */}
                            <div
                                tabIndex={0}
                                role="button"
                                className="m-1 flex items-center cursor-pointer"
                            >
                                <IoIosArrowDown size={20} />
                            </div>

                            {/* Dropdown Menu */}
                            <ul tabIndex={0} className="dropdown-content px-6  bg-base-100  z-[1] w-64 mt-12 p-2 shadow space-y-3">
                                {/* Profile Link */}
                                <li>
                                    <NavLink
                                        to="/profile"
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                        }
                                    >
                                        <FaUserCircle />
                                        Profile
                                    </NavLink>
                                </li>

                                <hr />

                                {/* Setting Link */}
                                <li>
                                    <NavLink
                                        to="/profile/editProfile"
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                        }
                                    >
                                        <FaCog />
                                        Setting
                                    </NavLink>
                                </li>


                                <hr />

                                {/* Language Link */}
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                        }
                                    >
                                        <FaLanguage />
                                        English
                                    </NavLink>
                                </li>

                                <hr />

                                {/* Logout Link */}
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                        }
                                    >
                                        <FaSignOutAlt />
                                        Log Out
                                    </NavLink>
                                </li>

                            </ul>
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
                    {/* Dropdown Menu */}
                    <ul tabIndex={0} className="dropdown-content px-6  bg-base-100  z-[1] w-64 mt-5 p-2 shadow space-y-3">
                        {/* Profile Link */}
                        <li>
                            <NavLink
                                to="/profile"
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <FaUserCircle />
                                Profile
                            </NavLink>
                        </li>

                        <hr />

                        {/* Setting Link */}
                        <li>
                            <NavLink
                                to="/profile/editProfile"
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <FaCog />
                                Setting
                            </NavLink>
                        </li>


                        <hr />

                        {/* Language Link */}
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <FaLanguage />
                                English
                            </NavLink>
                        </li>

                        <hr />

                        {/* Logout Link */}
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-red-500 font-bold' : ''}`
                                }
                            >
                                <FaSignOutAlt />
                                Log Out
                            </NavLink>
                        </li>

                    </ul>
                </div>


            </div>

            <div className='absolute top-24 right-3 lg:right-40 z-50'>
                <NotificationModal
                    isOpen={isModalOpen}
                    notifications={notifications}
                />
            </div>
        </div>
    );
};

export default Navbar;
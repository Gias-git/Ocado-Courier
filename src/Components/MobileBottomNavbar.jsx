import React from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { MdDashboard, MdDeliveryDining, MdPayment } from 'react-icons/md';
import { PiKeyReturnFill } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { TfiPackage } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';

const MobileBottomNavbar = ({ setIsMobileBottomPopupOpen, isMobileBottomPopupOpen }) => {
    return (
        <div className='flex bg-[#ffff] justify-around lg:hidden py-1'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-[#aeabaa] flex flex-col justify-center items-center'}>
                    <MdDashboard className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Dashboard</h1>
                </NavLink>
            </div>




            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/addParcel"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-[#aeabaa] flex flex-col justify-center items-center'}>
                    <MdDeliveryDining  className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Delivered</h1>
                </NavLink>
            </div>



            {/* Plus Icon */}
            <button
                onClick={() => setIsMobileBottomPopupOpen(!isMobileBottomPopupOpen)}
                className={`flex justify-center items-center -mt-10 transition-transform duration-300 ${isMobileBottomPopupOpen ? 'transform -translate-y-11' : 'transform translate-y-0'
                    }`}
            >
                <div
                    className={`${isMobileBottomPopupOpen ? 'w-8 h-8' : 'w-14 h-14'
                        } bg-[#ffff] rounded-full shadow-md flex items-center justify-center border-gray-200 transition-all duration-1000`}
                >
                    <span className={`text-[#aeabaa] ${isMobileBottomPopupOpen ? 'text-sm ' : 'text-4xl '}  font-extralight`}>
                        {isMobileBottomPopupOpen ? 'X' : '+'}
                    </span>
                </div>
            </button>






            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/allParcelList"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-[#aeabaa] flex flex-col justify-center items-center'}>
                    <PiKeyReturnFill className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Returned</h1>
                </NavLink>
            </div>

            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/paymentInvoiceList"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-[#aeabaa] flex flex-col justify-center items-center'}>
                    <FaCreditCard  className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Payments</h1>
                </NavLink>
            </div>




        </div>
    );
};

export default MobileBottomNavbar;
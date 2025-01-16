import React from 'react';
import { MdPayment } from 'react-icons/md';
import { PiKeyReturnFill } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { TfiPackage } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';

const MobileBottomNavbar = ({setIsMobileBottomPopupOpen}) => {
    return (
        <div className='flex bg-[#ffff] justify-around lg:hidden'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-black flex flex-col justify-center items-center'}>
                    <RxDashboard className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Dashboard</h1>
                </NavLink>
            </div>


           

            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/addParcel"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-black flex flex-col justify-center items-center'}>
                    <TfiPackage  className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Delivered</h1>
                </NavLink>
            </div>
          


            {/* plus icon */}
            <button onClick={()=>setIsMobileBottomPopupOpen(true)} className="flex justify-center  items-center -mt-10">
                <div className="w-14 h-14 bg-[#ffff]  rounded-full shadow-md flex items-center justify-center  border-gray-200">
                    <span className="text-black text-4xl font-extralight">+</span>
                </div>
            </button>


            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/allParcelList"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-black flex flex-col justify-center items-center'}>
                    <PiKeyReturnFill  className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Returned</h1>
                </NavLink>
            </div>

            <div className='flex flex-col gap-1 justify-center items-center'>
                <NavLink
                    to="/paymentInvoiceList"
                    className={({ isActive }) => isActive ? 'text-primaryColor flex flex-col justify-center items-center' : 'text-black flex flex-col justify-center items-center'}>
                    <MdPayment className="text-xl" />
                    <h1 className="text-[10px] font-semibold">Payments</h1>
                </NavLink>
            </div>
          



        </div>
    );
};

export default MobileBottomNavbar;
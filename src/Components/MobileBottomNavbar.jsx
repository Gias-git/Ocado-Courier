import React from 'react';
import { RxDashboard } from 'react-icons/rx';

const MobileBottomNavbar = () => {
    return (
        <div className='flex bg-[#ffff] justify-around lg:hidden'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <RxDashboard className='text-xl text-primaryColor'></RxDashboard>
                <h1 className='text-[10px] font-semibold text-primaryColor'>Dashboard</h1>
            </div>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <RxDashboard className='text-xl text-primaryColor'></RxDashboard>
                <h1 className='text-[10px] font-semibold text-primaryColor'>Dashboard</h1>
            </div>

            <div className="flex justify-center  items-center -mt-10">
                <div className="w-14 h-14 bg-[#ffff]  rounded-full shadow-md flex items-center justify-center  border-gray-200">
                    <span className="text-black text-4xl font-extralight">+</span>
                </div>
            </div>

            <div className='flex flex-col gap-1 justify-center items-center'>
                <RxDashboard className='text-xl text-primaryColor'></RxDashboard>
                <h1 className='text-[10px] font-semibold text-primaryColor'>Dashboard</h1>
            </div>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <RxDashboard className='text-xl text-primaryColor'></RxDashboard>
                <h1 className='text-[10px] font-semibold text-primaryColor'>Dashboard</h1>
            </div>



        </div>
    );
};

export default MobileBottomNavbar;
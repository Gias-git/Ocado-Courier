import React from 'react';
import logo from '../assets/logoSingle.png'
import Ocadologo from '../assets/ocadologo 2.png'
import { RxDashboard } from 'react-icons/rx';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from 'react';

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
                } flex flex-col justify-between h-screen pb-14 bg-gray-200 transition-all duration-300 transform px-5 `}
        >

            {/* Top section */}
            <div>
                {/* logo section */}
                <div className='flex justify-center'>
                    <img src={isHovered ? Ocadologo : logo} alt="" />
                </div>

                {/* Menu section */}
                <div className='flex gap-4 justify-center items-center flex-col mt-[40px] '>

                    <button
                        className='flex justify-start items-center  px-4 py-3 gap-2 hover:bg-[#E8333036] w-full text-left text-white hover:text-primaryColor rounded-md'>
                        <div>
                            <RxDashboard className='text-2xl ' />
                        </div>
                        <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px] transition-all duration-700 transform ease-in-out`}> DashBoard </h1>
                    </button>


                    <button
                        className='flex justify-start items-center  px-4 py-3 gap-2 hover:bg-[#E8333036] w-full text-left text-white hover:text-primaryColor rounded-md'>
                        <div>
                            <RxDashboard className='text-2xl ' />
                        </div>
                        <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px] transition-all duration-700 transform ease-in-out`}> Add Parcel </h1>
                    </button>


                    <button
                        className='flex justify-start items-center  px-4 py-3 gap-2 hover:bg-[#E8333036] w-full text-left text-white hover:text-primaryColor rounded-md'>
                        <div>
                            <RxDashboard className='text-2xl ' />
                        </div>
                        <h1 className={`${isHovered ? 'block' : 'hidden'} font-bold text-[14px] transition-all duration-700 transform ease-in-out`}> DashBoard </h1>
                    </button>










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
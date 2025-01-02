import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import StartComponent from '../Components/StartComponent';

const DashBoard = () => {
    return (
        <div className='flex font-urbanist  bg-[#fff5f5] '>

            {/* sidebar */}
            <div className=' border-r-2 border-[#E0E0E0] min-h-screen flex flex-col pt-[18px] items-center bg-gradient-to-b from-[#FFEDED] via-[#FFEDED] to-[#FFFFFF]'>
                <SideBar></SideBar>
            </div>

            {/* main section */}
            <div className='w-full'>
                {/* navbar */}

                <div className='w-full'>
                    <Navbar></Navbar>
                    <StartComponent></StartComponent>
                </div>

                <div className='px-8 pt-1'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;
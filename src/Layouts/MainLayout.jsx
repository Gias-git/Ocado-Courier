import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import StartComponent from '../Components/StartComponent';
import MobileBottomNavbar from '../Components/MobileBottomNavbar';
import CheckActiveBalance from '../Components/CheckActiveBalance';

const MainLayout = () => {
    return (
        <div className='flex  font-urbanist min-h-screen  bg-[#fff5f5] '>

            {/* sidebar */}
            <div className='fixed hidden lg:block z-50 border-r-2 border-[#E0E0E0] min-h-screen flex flex-col pt-[18px] items-center bg-gradient-to-b from-[#FFEDED] via-[#FFEDED] to-[#FFFFFF]'>
                <SideBar></SideBar>
            </div>
            <div className='fixed bottom-0 z-50 w-full bg-[#ffff] py-2 px-4'>
                <MobileBottomNavbar></MobileBottomNavbar>
            </div>


            {/* main section */}
            <div className='w-full lg:ml-[86px] '>
                {/* navbar */}

                <div className='w-full '>
                    <Navbar></Navbar>
                    <div className='hidden lg:block'>
                        <StartComponent></StartComponent>
                    </div>
                    <div className='lg:hidden'>
                        <CheckActiveBalance></CheckActiveBalance>
                    </div>

                 

                </div>

                <div className='lg:px-8 px-3 pt-1'>
                    <Outlet></Outlet>
                </div>

            </div>


        </div>
    );
};

export default MainLayout;
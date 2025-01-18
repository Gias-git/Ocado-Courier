import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import StartComponent from '../Components/StartComponent';
import MobileBottomNavbar from '../Components/MobileBottomNavbar';
import CheckActiveBalance from '../Components/CheckActiveBalance';
import MobileBottomMenuPlusButtonPopup from '../Components/MobileBottomMenuPlusButtonPopup/MobileBottomMenuPlusButtonPopup';

const MainLayout = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isMobileBottomPopupOpen, setIsMobileBottomPopupOpen]  = useState(false)
    return (
        <div className='flex  font-urbanist min-h-screen  bg-[#fff5f5] '>

            {/* sidebar */}
            <div className=' fixed hidden lg:flex  border-r-2 border-[#E0E0E0] h-screen  flex-col pt-[18px] items-center bg-gradient-to-b from-[#FFEDED] via-[#FFEDED] to-[#FFFFFF]'>
                <SideBar setIsHovered={setIsHovered} isHovered={isHovered}></SideBar>
            </div>

            <div className='fixed bottom-24 lg:hidden w-full  z-50 '>
                <MobileBottomMenuPlusButtonPopup isMobileBottomPopupOpen={isMobileBottomPopupOpen} setIsMobileBottomPopupOpen={setIsMobileBottomPopupOpen}></MobileBottomMenuPlusButtonPopup>
            </div>

            <div className='fixed  bottom-0 lg:hidden z-50 w-full bg-[#ffff] py-2 px-4'>
                <MobileBottomNavbar isMobileBottomPopupOpen={isMobileBottomPopupOpen} setIsMobileBottomPopupOpen={setIsMobileBottomPopupOpen}></MobileBottomNavbar>
            </div>


            {/* Main Section */}
            <div className={`w-full transition-all duration-300 transform ${isHovered? 'lg:ml-[240px] ':'lg:ml-[87px]'}`}>
                {/* Sticky Navbar */}
                <div className='sticky top-0 z-10 w-full'>
                    <Navbar isModalOpen={isModalOpen}  setModalOpen={setModalOpen}></Navbar>
                </div>


                <div className='hidden lg:block'>
                    <StartComponent></StartComponent>
                </div>
                <div className='lg:hidden'>
                    <CheckActiveBalance></CheckActiveBalance>
                </div>

                {/* Main Content */}
                <div onClick={() => setModalOpen(false)} className='lg:px-8 px-3 pt-1'>
                    <Outlet></Outlet>
                </div>
            </div>



        </div>
    );
};

export default MainLayout;
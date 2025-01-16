import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ProfileSideBar from './ProfileSideBar';
import { BsArrowBarRight } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

const ProfileLayout = () => {
    const {pathname} = useLocation()
    console.log(pathname)
    
    return (
        <div className='mb-16'>
            {/* Heading */}
            <div className='my-9 flex  items-center'>
               <Link> <h1 className='text-lg font-semibold'>Profile</h1> </Link> 
               {pathname == '/profile' && ''}
               {pathname == '/profile/editProfile' && <h1 className='text-lg flex justify-center items-center font-semibold text-primaryColor'> <IoIosArrowForward ></IoIosArrowForward > Edit Profile</h1> }

               {pathname == '/profile/changePassword' && <h1 className='text-lg flex justify-center items-center font-semibold text-primaryColor'> <IoIosArrowForward ></IoIosArrowForward > Change Password</h1> }
               {pathname == '/profile/paymentUpdate' && <h1 className='text-lg flex justify-center items-center font-semibold text-primaryColor'> <IoIosArrowForward ></IoIosArrowForward > Payment Update</h1> }
              
            </div>


            {/* profile Main Layout */}

            <div className='flex flex-col lg:flex-row gap-8'>

                {/* Profile Details Left section  */}
                <div className='min-h-[614px] bg-white lg:w-3/12 mb-10 rounded-lg'>
                    <ProfileSideBar></ProfileSideBar>
                </div>

                {/* Right Section */}
                <div className='w-full bg-white rounded-lg '>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default ProfileLayout;
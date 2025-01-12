import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSideBar from './ProfileSideBar';

const ProfileLayout = () => {
    return (
        <div className='mb-16'>
            {/* Heading */}
            <div className='my-9'>
                <h1>Profile</h1>
            </div>


            {/* profile Main Layout */}

            <div className='flex gap-8'>

                {/* Profile Details Left section  */}
                <div className='min-h-[614px] bg-white w-3/12 mb-10 rounded-lg'>
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
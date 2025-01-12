import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const EditProfileLayout = () => {
    return (
        <div className='py-10'>
            <div className='flex gap-10 px-5 font-lato text-[15px] text-[#666666]'>
                <NavLink
                    to="/profile/editProfile"
                    className={({ isActive }) => isActive ? "text-red-500 underline" : "text-gray-500"}
                >
                    <h1>Edit Profile</h1>
                </NavLink>
                <NavLink
                    to="/profile/changePassword"
                    className={({ isActive }) => isActive ? "text-red-500 underline" : "text-gray-500"}
                >
                    <h1>Change Password</h1>
                </NavLink>

            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default EditProfileLayout;
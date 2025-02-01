import React, { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { LuEyeClosed } from 'react-icons/lu';

const ChangePasswordPage = () => {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div className="mt-8 pb-10">
            <hr className='mb-4 border-1' />
            {/* form container */}
            <form className="py-5  w-full gap-8">
                <div className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 w-full gap-8'>

                    {/* Current Password Field */}
                    <div className="space-y-2 order-2 md:order-1">
                        <h1 className="text-lg font-medium">Current Password</h1>
                        <div className="relative">
                            <input
                                style={{ fontFamily: 'Arial, sans-serif' }}
                                required
                                type={showPassword.current ? "text" : "password"}
                                placeholder="Enter your current password"
                                className="input  input-bordered w-full"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("current")}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                            >
                                {showPassword.current ? (
                                    <span role="img" aria-label="Hide Password"><FaRegEyeSlash /></span>
                                ) : (
                                    <span role="img" aria-label="Show Password"><IoEyeOutline /> </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* New Password Field */}
                    <div className="space-y-2 order-2 md:order-1">
                        <h1 className="text-lg font-medium">New Password</h1>
                        <div className="relative">
                            <input
                                style={{ fontFamily: 'Arial, sans-serif' }}
                                required
                                type={showPassword.new ? "text" : "password"}
                                placeholder="Enter your new password"
                                className="input input-bordered w-full"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("new")}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                            >
                                {showPassword.new ? (
                                    <span role="img" aria-label="Hide Password"><FaRegEyeSlash /></span>
                                ) : (
                                    <span role="img" aria-label="Show Password"><IoEyeOutline /> </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2 order-2 md:order-1">
                        <h1 className="text-lg font-medium">Confirm Password</h1>
                        <div className="relative">
                            <input
                                style={{ fontFamily: 'Arial, sans-serif' }}
                                required
                                type={showPassword.confirm ? "text" : "password"}
                                placeholder="Enter your confirm password"
                                className="input input-bordered w-full"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("confirm")}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                            >
                                {showPassword.confirm ? (
                                    <span role="img" aria-label="Hide Password"><FaRegEyeSlash /></span>
                                ) : (
                                    <span role="img" aria-label="Show Password"><IoEyeOutline /> </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <hr className='my-4  col-span-2  order-2 md:order-1 ' />

                {/* Buttons */}
                <div className='space-y-2 order-2 lg:grid-cols-2 px-4 lg:px-12 md:order-1 space-x-3 text-primaryColor text-sm font-medium '>
                    <button className='py-2 px-3 border-primaryColor border-2 rounded-md hover:bg-primaryColor hover:text-white'>Update</button>
                    <button className='py-2 px-3 border-primaryColor border-2 rounded-md hover:bg-primaryColor hover:text-white'>Cancel</button>
                </div>

            </form>


        </div>
    );
};

export default ChangePasswordPage;

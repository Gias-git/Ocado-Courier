import React from 'react';
import { CiMobile1 } from 'react-icons/ci';
import { IoMdLaptop } from 'react-icons/io';
import { HiInformationCircle } from "react-icons/hi2";

const ProfileDetails = () => {
    return (
        <div>
            <h1 className='text-[17px]  font-lato font-semibold mb-6 px-8 py-8'>Profile Details</h1>

            <hr className='pt-4  col-span-2  order-2 md:order-1 ' />
            <div><h1 className='text-[#717171] text-[14px] text-center pb-10 flex gap-2 justify-center items-center'><HiInformationCircle /> Your name is updated with verified NID name, you can't edit your name</h1></div>
            {/* Form Container */}
            <form className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 w-full gap-8'>

                {/* Business Name Field */}
                <div className='space-y-2'>
                    <h1 className='text-lg font-medium'>Business Name</h1>
                    <input
                        required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Phone Field */}
                <div className='space-y-2'>
                    <h1 className='text-lg font-medium'>Phone</h1>
                    <input
                        required
                        type="text"
                        placeholder="Enter your number"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Secondary Number Field */}
                <div className='space-y-2'>
                    <h1 className='text-lg font-medium'>Secondary Number</h1>
                    <input
                        type="text"
                        placeholder="Enter your number"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Email Field */}
                <div className='space-y-2'>
                    <h1 className='text-lg font-medium'>Email</h1>
                    <input
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Pick Up Address Field */}
                <div className='space-y-2'>
                    <h1 className='text-lg font-medium'>Pick up Address</h1>
                    <input
                        type="text"
                        placeholder="Enter your pick up address"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Website/Facebook Page Field */}
                <div className='space-y-2'>
                    <h1 className='text-lg font-medium'>Website/Facebook Page (Optional)</h1>
                    <input
                        type="text"
                        placeholder="Enter URL"
                        className="input input-bordered w-full"
                    />
                </div>


                {/* NID Card Front Side */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>NID Card Front Side </h1>

                    <input required
                        type="file"
                        placeholder="Shop name"
                        className="input input-bordered py-2 w-full " />
                </div>


                {/* NID Card Back Side */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>NID Card Back Side </h1>
                    <input required
                        type="file"
                        placeholder="Shop name"
                        className="input input-bordered py-2 w-full " />
                </div>
            </form>



            <hr className='my-6' />

            {/* login history */}

            <div className='px-8 py-8'>
                <h1 className='text-[15px] font-lato font-semibold mb-10 '>Login History</h1>

                {/* login devices  */}

                <div className='space-y-5'>


                    {/* login device- phone */}
                    <div className='flex justify-between items-center text-primaryColor font-medium'>
                        <div className='flex gap-4 justify-center  items-center'>
                            <div className='text-4xl bg-[#eeeaea] flex justify-center items-center text-primaryColor  py-4 px-5 w-[70px] rounded-lg'>
                                <CiMobile1 />
                            </div>

                            <div>
                                <h1 className='text-[15px] font-medium'>Phone</h1>
                                <p className='text-[#6B6B6B] font-light text-[15px]'>Apr 02, 2024 at 06:04 AM</p>
                            </div>
                        </div>


                        <div>
                            <button>Logout</button>
                        </div>
                    </div>


                    {/* login device- Laptop */}
                    <div className='flex justify-between items-center text-primaryColor font-medium'>
                        <div className='flex gap-4 justify-center  items-center'>
                            <div className='text-4xl bg-[#eeeaea] flex justify-center items-center text-primaryColor  py-4 px-5 w-[70px] rounded-lg'>
                                <IoMdLaptop />
                            </div>

                            <div>
                                <h1 className='text-[15px] font-medium'>Laptop</h1>
                                <p className='text-[#6B6B6B] font-light text-[15px]'>Apr 02, 2024 at 06:04 AM</p>
                            </div>
                        </div>


                        <div>
                            <button>Logout</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ProfileDetails;
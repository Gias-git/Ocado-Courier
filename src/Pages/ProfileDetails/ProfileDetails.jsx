import React from 'react';
import { CiMobile1 } from 'react-icons/ci';
import { IoMdLaptop } from 'react-icons/io';

const ProfileDetails = () => {
    return (
        <div>
            <h1 className='text-[15px] font-lato font-semibold mb-10 px-8 py-8'>Profile Details</h1>

            {/* form container */}
            <form className='grid grid-cols-2 px-12 w-full gap-8'>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>

                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
                </div>


                {/* Business Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Business Name </h1>
                    <input required
                        type="text"
                        placeholder="Shop name"
                        className="input input-bordered  w-full " />
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
                                <IoMdLaptop  />
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
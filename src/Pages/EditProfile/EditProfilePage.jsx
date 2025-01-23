import React from 'react';

const EditProfilePage = () => {
    return (
        <div className='mt-10'>
            {/* form container */}
            <form className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 w-full gap-8'>


                {/*Name Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Name </h1>
                    <input required
                        type="text"
                        placeholder="Name"
                        className="input input-bordered  w-full " />
                </div>

                {/* Phone Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Phone </h1>
                    <input required
                        type="text"
                        placeholder="Enter Phone number"
                        className="input input-bordered  w-full " />
                </div>


                {/* Secondary Number */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Secondary Number</h1>
                    <input required
                        type="text"
                        placeholder="Enter your number"
                        className="input input-bordered  w-full " />
                </div>


                {/* Email Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Email </h1>
                    <input required
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered  w-full " />
                </div>


                {/* Pick up Address*/}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Pick up Address </h1>
                    <textarea required className="textarea textarea-bordered w-full  h-24" placeholder="Enter your pick up address"></textarea>

                </div>


                {/* Website/Facebook Page (Optional)  */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Website/Facebook Page (Optional)  </h1>
                    <input required
                        type="url"
                        placeholder="Enter url"
                        className="input input-bordered  w-full " />
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

                <div className='space-y-2 order-2 md:order-1 space-x-3 text-primaryColor text-sm font-medium  '>
                    <button className='py-2 px-3 border-primaryColor border-2 rounded-md hover:bg-primaryColor hover:text-white'>Update Profile</button>
                    <button className='py-2 px-3 border-primaryColor border-2 rounded-md hover:bg-primaryColor hover:text-white'>Cancel</button>
                    
                </div>
            </form>
        </div>
    );
};

export default EditProfilePage;
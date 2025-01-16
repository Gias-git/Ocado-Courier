import React from 'react';

const ChangePasswordPage = () => {
    return (
        <div className='mt-10'>
            {/* form container */}
            <form className='grid grid-cols-1 lg:grid-cols-2 px-12 w-full gap-8'>


                {/* Current Password Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Current Password</h1>
                    <input required
                        type="password"
                        placeholder="Enter your current password"
                        className="input input-bordered  w-full " />
                </div>

                {/* New Password Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>New Password </h1>
                    <input required
                        type="password"
                        placeholder="Enter your new password"
                        className="input input-bordered  w-full " />
                </div>


                {/* Confirm Password Field */}
                <div className='space-y-2 order-2 md:order-1 '>
                    <h1 className='text-lg font-medium'>Confirm Password </h1>
                    <input required
                        type="password"
                        placeholder="Enter your confirm password"
                        className="input input-bordered  w-full " />
                </div>



            </form>
        </div>
    );
};

export default ChangePasswordPage;
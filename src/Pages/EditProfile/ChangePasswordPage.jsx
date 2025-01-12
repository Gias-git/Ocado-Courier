import React from 'react';

const ChangePasswordPage = () => {
    return (
        <div>
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

            </form>
        </div>
    );
};

export default ChangePasswordPage;
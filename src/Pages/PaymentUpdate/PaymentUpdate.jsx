import React from 'react';

const PaymentUpdate = () => {
    return (
        <div className='mt-12 px-10'>
            <h1 className='text-lg font-bold'>Payment Update</h1>
            <div className='mt-10'>
                <form className='grid grid-cols-1 lg:grid-cols-2 px-12 w-full gap-8'>


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
        </div>
    );
};

export default PaymentUpdate;
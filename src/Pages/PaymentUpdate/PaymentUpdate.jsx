import React from 'react';

const PaymentUpdate = () => {
    return (
        <div className='mt-12 lg:px-10 px-4 mb-12 '>
            <h1 className='text-lg font-bold pb-6 md:pb-10'>Payment Update</h1>
            <hr className='mb-4 border-1' />
            <div className='mt-10'>
                <form className='py-5  w-full gap-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 w-full gap-8 pb-12'>

                        {/* Select Bank Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Select Bank</h1>
                            <input
                                required
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Select Mobile Banking Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Select Mobile Banking</h1>
                            <input
                                required
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Bank Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Bank</h1>
                            <input
                                required
                                type="text"
                                placeholder="Branch Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Routing Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Routing</h1>
                            <input
                                required
                                type="text"
                                placeholder="Routing No."
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Account Name Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Account Name</h1>
                            <input
                                required
                                type="text"
                                placeholder="Account Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Account No Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Account No</h1>
                            <input
                                required
                                type="text"
                                placeholder="A/C No"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Nagad Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Nagad (Type English)</h1>
                            <input
                                required
                                type="text"
                                placeholder="11 Digit Nagad No."
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Bkash Field */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Bkash (Type English)</h1>
                            <input
                                required
                                type="text"
                                placeholder="11 Digit Bkash No."
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Select Payment Method */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Select Payment Method</h1>
                            <select
                                required
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled selected>Select payment method</option>
                                <option value="bank">Bank</option>
                                <option value="mobile">Mobile Banking</option>
                            </select>
                        </div>

                        {/* Select Receivable Range */}
                        <div className='space-y-2'>
                            <h1 className='text-lg font-medium'>Select Receivable Range</h1>
                            <select
                                required
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled selected>Select receivable range</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                    </div>

                    <hr className='mb-4 border-1' />

                    {/* Buttons */}
                    <div className='space-y-2 order-2 md:order-1 space-x-3 text-primaryColor text-sm font-medium  '>
                        <button className='py-2 px-3 border-primaryColor border-2 rounded-md hover:bg-primaryColor hover:text-white'>Update</button>
                        <button className='py-2 px-3 border-primaryColor border-2 rounded-md hover:bg-primaryColor hover:text-white'>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default PaymentUpdate;

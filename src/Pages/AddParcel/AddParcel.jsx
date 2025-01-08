import React from 'react';
import FormFirstColumn from './FormFirstColumn';

const AddParcel = () => {
    return (
        <div className='mt-6'>
            {/* Hading */}
            <div>
                <h1 className='text-2xl font-semibold font-lato'>Add Parcel</h1>
            </div>

            {/* form section */}

            <div className='md:p-12 px-4 py-8 bg-white mt-6  rounded-lg'>

                {/* form header */}
                <div className='mb-6'>
                    <h1 className='text-6 font-semibold'>To create multiple parcel quickly</h1>
                </div>


                {/* Form  */}
                <form className='xl:w-11/12 mx-auto'>

                    {/* Redio input section-1 */}
                    <div className='flex justify-between md:justify-start text-sm  w-full md:space-x-16'>
                        <div className='flex  items-center gap-4 font-medium'> <input type="radio" name="radio-1" className="radio radio-error" defaultChecked />  Regular Delivery</div>

                        <div className='flex  items-center gap-4 font-medium'> <input type="radio" name="radio-1" className="radio radio-error" defaultChecked />  Express Delivery</div>
                    </div>



                    {/* Redio input section-2 */}
                    <div className='flex justify-between w-full text-sm md:justify-center mt-9 md:space-x-16'>
                        <div className='flex  items-center gap-4 font-medium'> <input type="radio" name="radio-2" className="radio radio-error" defaultChecked />Door to Door Delivery</div>

                        <div className='flex  items-center gap-4 font-medium'> <input type="radio" name="radio-2" className="radio radio-error" defaultChecked />Hub Delivered</div>
                    </div>



                    {/* main Input filed section */}

                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-11 mt-6'>


                        {/* Phone Field */}
                        <div className='space-y-2 order-2 md:order-1 '>
                            <h1 className='text-lg font-medium'>Phone <span className='text-primaryColor'>  * </span></h1>
                            <input required
                                type="number"
                                placeholder="Customer Phone Number"
                                className="input input-bordered  w-full lg:max-w-xs" />
                            <div className='flex gap-3 text-[12px]'>
                                <h2 className='font-medium'>Delivered <span className='text-green-700'> 1 (17%) </span> </h2>
                                <h2>Processing <span className='text-orange-400'> 4 (67%) </span> </h2>
                                <h2>Returned <span className='text-primaryColor'> 2 (37%) </span></h2>
                            </div>
                        </div>



                        {/* Secondary Phone  Field */}
                        <div className='space-y-2 order-3 md:order-2 '>
                            <h1 className='text-lg font-medium'>Secondary Phone <span className='text-primaryColor'>  * </span></h1>
                            <input
                                type="number"
                                placeholder="Customer Phone Number (Optional)"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>



                        {/* Merchant Order ID Field */}
                        <div className='space-y-2 order-1 md:order-3 '>
                            <h1 className='text-lg font-medium'>Merchant Order ID <span className='text-primaryColor'>  * </span></h1>
                            <input required
                                type="number"
                                placeholder="Type ID (Optional)"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>


                        {/* Name Field */}
                        <div className='space-y-2 order-4 md:order-4 '>
                            <h1 className='text-lg font-medium'>Name <span className='text-primaryColor'>  * </span></h1>
                            <input required
                                type="text"
                                placeholder="Customer Name"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>



                        {/* Select Delivery Area  Field */}

                        <div className='space-y-2 order-5 md:order-5 '>
                            <h1 className='text-lg font-medium'>Select Delivery Area <span className='text-primaryColor'>  * </span></h1>
                            <select className="select select-bordered w-full lg:max-w-xs">
                                <option disabled selected>Select Delivery  Area</option>
                                <option>Select Delivery  Area</option>


                            </select>
                        </div>


                      


                        {/* Address  Field */}
                        <div className='space-y-2 order-6 md:order-7 '>
                            <h1 className='text-lg font-medium'>Address <span className='text-primaryColor'>  * </span></h1>
                            <textarea required className="textarea textarea-bordered w-full lg:max-w-xs" rows="2" placeholder="Customer full address"></textarea>
                        </div>

                        {/* Collected Amount  Field */}
                        <div className='space-y-2 order-7'>
                            <h1 className='text-lg font-medium'>Collected Amount  <span className='text-primaryColor'>  * </span></h1>
                            <input required
                                type="number"
                                placeholder="Type collected amount"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>


                        {/* Product Value Amount Field */}
                        <div className='space-y-2 order-8'>
                            <h1 className='text-lg font-medium'>Product Value Amount <span className='text-primaryColor'>  * </span></h1>
                            <input required
                                type="number"
                                placeholder="Type value amount (Optional)"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>

                        {/* Instructions  Field */}
                        <div className='space-y-2 order-9'>
                            <h1 className='text-lg font-medium'>Instructions</h1>
                            <textarea className="textarea textarea-bordered w-full lg:max-w-xs" rows="2" placeholder="Type here (Optional)"></textarea>
                        </div>

                        {/* Product Type Field */}
                        <div className='space-y-2 order-10'>
                            <h1 className='text-lg font-medium'>Product Type<span className='text-primaryColor'>  * </span></h1>
                            <select className="select select-bordered w-full lg:max-w-xs">
                                <option disabled selected>Package</option>
                                <option>Package</option>
                                <option>Package</option>
                                <option>Package</option>
                                <option>Package</option>

                            </select>
                        </div>


                        {/* Weight Field */}
                        <div className='space-y-2 order-11'>
                            <h1 className='text-lg font-medium'>Weight (KG)</h1>
                            <input required
                                type="number"
                                placeholder="Customer Phone Number"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>


                        {/* Category Field */}
                        <div className='space-y-2 order-12'>
                            <h1 className='text-lg font-medium'>Category Type<span className='text-primaryColor'>  * </span></h1>
                            <select className="select select-bordered w-full lg:max-w-xs">
                                <option disabled selected>Category</option>
                                <option>Category</option>

                            </select>
                        </div>


                        {/* Dateline Delivery Field */}
                        <div className='space-y-2 order-13'>
                            <h1 className='text-lg font-medium'>Dateline Delivery <span className='text-primaryColor'>  * </span></h1>
                            <input required
                                type="number"
                                placeholder="Select your Dateline Delivery (Optional)"
                                className="input input-bordered  w-full lg:max-w-xs" />
                        </div>


                          {/* Account Field */}
                          <div className='space-y-2 row-span-5 order-14 md:order-6 '>
                            <div className=' px-4 py-5 border-2 border-primaryColor rounded-lg space-y-6 font-medium'>

                                {/* Heading */}
                                <h1 className='text-lg font-semibold'>Parcel Delivery Cost</h1>

                                {/* Amount part */}
                                <div className='space-y-4'>

                                    {/* Delivery Charge */}

                                    <div className='flex justify-between'>
                                        <h1>Delivery Charge</h1>
                                        <h3>60 Tk</h3>
                                    </div>


                                    {/* Weight Charge  */}

                                    <div className='flex justify-between'>
                                        <h1>Weight Charge</h1>
                                        <h3>0 Tk</h3>
                                    </div>

                                    {/* Delivery Charge */}

                                    <div className='flex justify-between'>
                                        <h1>COD Charge</h1>
                                        <h3>160 Tk</h3>
                                    </div>



                                    {/* Total Cost */}
                                    <div className='text-xl font-semibold flex flex-col'>
                                        <hr className='border-[1px]  border-gray-400' />
                                        <div className='flex justify-between'>
                                            <h1>Total Cost</h1>
                                            <h3>1600 Tk</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </form>

                <div className='flex justify-center items-center mt-12'>
                    <button className='text-2xl text-white font-semibold bg-primaryColor py-3 px-20 rounded font-lato mx-auto'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default AddParcel;
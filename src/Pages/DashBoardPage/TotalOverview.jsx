import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import CircularProgressDashboard from './CircularProgress';

const TotalOverview = () => {
    return (
        <div>
            {/* headings */}
            <div className='flex justify-around'>
                <div><h1 className='font-medium'>Total Overview</h1></div>
                <div>
                    <div></div>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1 className='text-sm font-semibold text-primaryColor'>View More  </h1>
                </div>
            </div>

            <div className='flex justify-between items-center mt-20'>
                <div className='mx-auto '>
                    <CircularProgressDashboard />
                </div>

                <div className='space-y-7'>
                    {/* green */}
                    <div className='flex gap-2'>
                        <div className='pt-1'>
                            <div className={`w-4 h-4 rounded-full bg-[#249782]`}></div>
                        </div>
                        <div className='flex flex-col'>

                            <h1 className='font-semibold'> Delivered Parcel </h1>
                            <div className='text-[8px] font-bold'>50 Parcel | ৳ 3,66,542</div>
                        </div>
                    </div>


                     {/* green */}
                     <div className='flex gap-2 ml-4'>
                        <div className='pt-1'>
                            <div className={`w-4 h-4 rounded-full bg-[#249782]`}></div>
                        </div>
                        <div className='flex flex-col'>

                            <h1 className='font-semibold'> Delivered Parcel </h1>
                            <div className='text-[8px] font-bold'>50 Parcel | ৳ 3,66,542</div>
                        </div>
                    </div>


                     {/* green */}
                     <div className='flex gap-2'>
                        <div className='pt-1'>
                            <div className={`w-4 h-4 rounded-full bg-[#249782]`}></div>
                        </div>
                        <div className='flex flex-col'>

                            <h1 className='font-semibold'> Delivered Parcel </h1>
                            <div className='text-[8px] font-bold'>50 Parcel | ৳ 3,66,542</div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default TotalOverview;
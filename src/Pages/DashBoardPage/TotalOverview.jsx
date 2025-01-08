import React from 'react';
import { BiArrowFromRight, BiCalendar } from 'react-icons/bi';
import CircularProgressDashboard from './CircularProgress';
import { FaArrowRight } from 'react-icons/fa';

const TotalOverview = () => {
    const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
    return (
        <div>
            <style>
                {`
          input[type="date"] {
            padding: 0; /* Remove padding */
            outline: none; /* Optional: Remove focus outline */
          }

          input[type="date"]::-webkit-calendar-picker-indicator {
            display: none; /* Hide calendar icon */
          }
        `}
            </style>
            {/* headings */}
            <div className='space-y-3 overflow-x-auto'>


                <div className='flex justify-around items-center flex-wrap space-y-3'>
                    <div><h1 className='font-medium'>Total Overview</h1></div>
                    <div className='flex justify-center items-center gap-3 border-2   rounded-lg border-[#9a9a9a]'>
                        <div className='text-xl border-r-2 px-2 py-1 '>
                            <BiCalendar></BiCalendar>
                        </div>
                        <div className='flex gap-2 '>
                          
                            <input  defaultValue={formattedDate}  className='text-sm' onClick={(e) => e.target.showPicker?.()} type="date" name="" id="" />
                            <h1>-</h1>
                            <input defaultValue={formattedDate} className='text-sm ' onClick={(e) => e.target.showPicker?.()} type="date" name="" id="" />
                        </div>

                    </div>
                </div>

                <div className='flex justify-end'>
                    <h1 className='text-sm font-semibold text-primaryColor flex justify-center items-center gap-4 mr-4'>View More <FaArrowRight /> </h1>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mt-20'>
                <div className='mx-auto '>
                    <CircularProgressDashboard />
                </div>

                <div className='space-y-7'>

                    <div className='flex flex-row space-x-10 lg:flex-col lg:space-y-7'>
                        {/* green */}
                        <div className='flex gap-2 justify-center items-center'>
                            <div className='pt-1'>
                                <div className={`w-4 h-4 rounded-full bg-[#249782]`}></div>
                            </div>
                            <div className='flex flex-col'>

                                <h1 className='font-semibold'> Delivered Parcel </h1>
                                <div className='text-[8px] font-bold'>50 Parcel | ৳ 3,66,542</div>
                            </div>
                        </div>


                        {/* green */}
                        <div className='flex gap-2 justify-center items-center lg:ml-4'>
                            <div className='pt-1'>
                                <div className={`w-4 h-4 rounded-full bg-[#249782]`}></div>
                            </div>
                            <div className='flex flex-col'>

                                <h1 className='font-semibold'> Delivered Parcel </h1>
                                <div className='text-[8px] font-bold'>50 Parcel | ৳ 3,66,542</div>
                            </div>
                        </div>
                    </div>



                    {/* green */}
                    <div className='flex gap-2  justify-center items-center'>
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
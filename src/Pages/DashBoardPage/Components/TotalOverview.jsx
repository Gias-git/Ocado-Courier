import React, { useState } from 'react';
import { BiArrowFromRight, BiCalendar } from 'react-icons/bi';
import CircularProgressDashboard from './CircularProgress';
import { FaArrowRight } from 'react-icons/fa';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const TotalOverview = () => {

    const [dates, setDates] = useState([])
   

    return (
        <div>

            <div className="space-y-2 overflow-x-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <h1 className="font-semibold">Total Overview</h1>

                    {/* Date Picker */}
                    <div className="w-full lg:w-auto">
                        <RangePicker
                            style={{ width: '100%' }}
                            onChange={(dates) => setDates(dates)}
                        />
                    </div>
                </div>

                <div >
                    <h1 className='text-sm font-semibold text-primaryColor text-right'>View More </h1>
                </div>
            </div>


            <div className='flex flex-col lg:flex-row justify-between items-center mt-10'>
                <div className='mx-auto '>
                    <CircularProgressDashboard />
                </div>

                <div className='space-y-7'>

                    <div className='flex flex-row space-x-10 lg:flex-col lg:space-y-7'>
                        {/* Delivered Parcel */}
                        <div className='flex gap-2 justify-center items-center'>
                            <div className='pt-1'>
                                <div className={`w-4 h-4 rounded-full bg-[#249782]`}></div>
                            </div>
                            <div className='flex flex-col'>

                                <h1 className='font-semibold text-[#249782]'> Delivered Parcel </h1>
                                <div className='text-[8px] font-bold'><span className='text-[#249782]'>50 </span> Parcel | ৳ 3,66,542</div>
                            </div>
                        </div>


                        {/* Parcel Process */}
                        <div className='flex gap-2 justify-center items-center lg:ml-4'>
                            <div className='pt-1'>
                                <div className={`w-4 h-4 rounded-full bg-[#F28D61]`}></div>
                            </div>
                            <div className='flex flex-col'>

                                <h1 className='font-semibold text-[#F28D61]'>Parcel Process</h1>
                                <div className='text-[8px] font-bold'> <span className='text-[#F28D61]'>50 </span> Parcel | ৳ 3,66,542</div>
                            </div>
                        </div>
                    </div>



                    {/* Return Parcel */}
                    <div className='flex gap-2  justify-center items-center'>
                        <div className='pt-1'>
                            <div className={`w-4 h-4 rounded-full bg-[#E03939]`}></div>
                        </div>
                        <div className='flex flex-col'>

                            <h1 className='font-semibold text-[#E03939]'> Return Parcel </h1>
                            <div className='text-[8px] font-bold'><span className='text-[#E03939]'>52 </span> Parcel | ৳ 3,66,542</div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default TotalOverview;
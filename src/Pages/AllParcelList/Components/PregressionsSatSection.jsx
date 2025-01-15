
import React from 'react';
import CircularProgressPercentage from './CircularProgressbar';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';



const ProgressionSateSection = () => {
    const DeliveredProgressPercentage = 77
    const ReturnedProgressPercentage = 40
    const UnderProcessingProgressPercentage = 60
    return (
        <div className='flex flex-wrap justify-evenly bg-[#FDFDFD] py-2 items-center gap-5 mt-7'>

            {/* Title */}
            <div className='text-xl hidden lg:block font-medium'>
                <h1>Delivery Parcel List | 03 Parcels</h1>
                <hr className='border-2 border-primaryColor w-3/12' />
            </div>

            {/* Delivered Progress */}
            <div className='flex  justify-center  items-center gap-2' >
                <CircularProgressPercentage ProgressPercentage={DeliveredProgressPercentage} stroke={'rgba(93, 204, 119, 1)'}></CircularProgressPercentage>
                <div>
                    <h1>Delivered</h1>
                    <div className='flex gap-2 text-[#5DCC77]'>
                        <h1 className='font-bold text-xl'>120</h1>
                        <div className='flex items-end text-[#249782]'>
                            <p className='text-sm flex gap-2 font-semibold'>28.4% <FaArrowTrendUp /></p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Returned Progress */}
            <div className='flex  justify-center    items-center gap-2' >
                <CircularProgressPercentage ProgressPercentage={ReturnedProgressPercentage} stroke={'rgb(238, 67, 67)'}></CircularProgressPercentage>
                <div>
                    <h1>Returned</h1>
                    <div className='flex gap-4 text-[#EE4343]'>
                        <h1 className='font-bold text-xl'>40</h1>
                        <div className='flex items-end'>
                            <p className='text-sm flex gap-2 font-semibold'>28.4% <FaArrowTrendDown /></p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Under Processing Progress */}
            <div className='flex justify-center   items-center gap-2' >
                <CircularProgressPercentage ProgressPercentage={UnderProcessingProgressPercentage} stroke={'rgb(255, 119, 60)'}></CircularProgressPercentage>
                <div>
                    <h1>Under Processing</h1>
                    <div className='flex gap-2 text-[#FF773B]'>
                        <h1 className='font-bold text-xl'>50</h1>
                        <div className='flex items-end text-[#249782]'>
                            <p className='text-sm flex gap-2 font-semibold'>28.4% <FaArrowTrendUp /></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProgressionSateSection;
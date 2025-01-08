import React from 'react';

const PaymentRelease = () => {
    return (
        <div className=' bg-[#ffff] flex p-2 lg:p-6 rounded-xl'>

            <div className='flex flex-col justify-between w-10/12 '>
                <div className='flex-grow  pt-8 '>
                    <h1 className='text-[#666363] text-lg font-semibold'>Payment Release</h1>
                    <p className='text-[12px]'>Receivable Date : <span className='font-bold'> 03 Sep, 2024 </span> </p>
                </div>

                {/* charges */}

                <div className='mt-6 flex justify-around lg:pl-4'>
                    {/* Weight Charge */}
                    <div className='border-l-2 border-[#FF0000] pl-1'>
                        <h1 className='text-[8px] lg:text-[12px] font-medium text-[#686868]'>Weight Charge</h1>
                        <p className='text-[10px] font-semibold'>৳ 0</p>
                        <p className='text-[8px] lg:text-[12px] font-medium text-[#686868]'>Parcel  0</p>
                    </div>

                     {/* Weight Charge */}
                     <div className='border-l-2 border-[#FF0000] pl-1'>
                        <h1 className='text-[8px] lg:text-[12px] font-medium text-[#686868]'>Weight Charge</h1>
                        <p className='text-[10px] font-semibold'>৳ 0</p>
                        <p className='text-[8px] lg:text-[12px] font-medium text-[#686868]'>Parcel  0</p>
                    </div>

                     {/* Weight Charge */}
                     <div className='border-l-2 border-[#FF0000] pl-1'>
                        <h1 className='text-[8px] lg:text-[12px] font-medium text-[#686868]'>Weight Charge</h1>
                        <p className='text-[10px] font-semibold'>৳ 0</p>
                        <p className='text-[8px] lg:text-[12px] font-medium text-[#686868]'>Parcel  0</p>
                    </div>

                </div>
            </div>



            {/* balance */}
            <div className='flex flex-col justify-center  w-5/12 ml-auto'>
                <h1 className='text-right text-xl font-semibold '>৳ 10,75,978</h1>
                <p className='text-right'>Parcel <span className='text-[12px] border-l-2 pl-1 border-primaryColor font-semibold'>80</span></p>
            </div>


        </div>
    );
};

export default PaymentRelease;
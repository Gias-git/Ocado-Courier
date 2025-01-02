import React from 'react';

const PaymentRelease = () => {
    return (
        <div className=' bg-[#ffff] flex p-6 rounded-xl'>

            <div className='flex flex-col justify-between w-9/12 '>
                <div className='flex-grow  pt-8 '>
                    <h1 className='text-[#666363] text-lg font-semibold'>Payment Release</h1>
                    <p className='text-[12px]'>Receivable Date : <span className='font-bold'> 03 Sep, 2024 </span> </p>
                </div>

                {/* charges */}

                <div className='mt-6 flex gap-4 px-4'>
                    {/* Weight Charge */}
                    <div className='border-l-2 border-[#FF0000] pl-1'>
                        <h1 className='text-[12px] font-medium text-[#686868]'>Weight Charge</h1>
                        <p className='text-[10px] font-semibold'>৳ 0</p>
                        <p className='text-[12px] font-medium text-[#686868]'>Parcel  0</p>
                    </div>

                    {/* Weight Charge */}
                    <div className='border-l-2 border-[#FF0000] pl-1'>
                        <h1 className='text-[12px] font-medium text-[#686868]'>Weight Charge</h1>
                        <p className='text-[10px] font-semibold'>৳ 0</p>
                        <p className='text-[12px] font-medium text-[#686868]'>Parcel  0</p>
                    </div>

                    {/* Weight Charge */}
                    <div className='border-l-2 border-[#FF0000] pl-1'>
                        <h1 className='text-[12px] font-medium text-[#686868]'>Weight Charge</h1>
                        <p className='text-[10px] font-semibold'>৳ 0</p>
                        <p className='text-[12px] font-medium text-[#686868]'>Parcel  0</p>
                    </div>
                </div>
            </div>



            {/* balance */}
            <div className='flex flex-col justify-center  ml-auto'>
                <h1 className='flex text-xl font-semibold text-left'>৳ 10,75,978</h1>
                <p className='ml-auto'>Parcel <span className='text-[12px] border-l-2 pl-1 border-primaryColor font-semibold'>80</span></p>
            </div>


        </div>
    );
};

export default PaymentRelease;
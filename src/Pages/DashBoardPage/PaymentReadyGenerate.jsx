import React from 'react';
import paymentReadyIcon from '../../assets/Icons/paymentReadyIcon.png'
import { TbCurrencyTaka } from 'react-icons/tb';
const PaymentReadyGenerate = () => {
    return (
        <div className='p-18 bg-[#ffff] h-[134px] flex justify-between'>

            <div className='flex flex-col justify-between'>
                <div className='flex-grow  pt-10 '>
                    <h1 className='text-[#666363] text-lg font-semibold'>Payment Ready for Generate</h1>
                </div>

                <div className=''>
                    <img src={paymentReadyIcon} alt="" />
                </div>

            </div>
            <div className='flex flex-col justify-end'>

                <div className='flex gap-3 justify-end'>
                    <div>
                        <button className='text-sm text-[#24B2D1] rounded-xl font-semibold bg-[#54c3ff3a] px-3 py-1'>Parcel</button>
                    </div>

                    <h1 className='text-3xl font-semibold text-right'>80</h1>

                </div>
                <hr className='border-[#42B6F6] border-2 my-2 w-6/12  ml-auto rounded-lg' />
                <div className='flex gap-6'>
                    <button className='text-sm text-[#0CBC63] rounded-xl font-semibold bg-[#4ad99237] px-3 py-1'>Amount</button>
                    <h1 className='flex text-xl font-semibold text-right'> <h1 className='font-bold'> ৳ 10,75,978 </h1> </h1>
                </div>
            </div>
        </div>
    );
};

export default PaymentReadyGenerate;
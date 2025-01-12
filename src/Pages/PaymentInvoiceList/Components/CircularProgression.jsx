import React from 'react';

import { GrDocumentText } from 'react-icons/gr';
import CircularProgressInvoice from './CircularProgrssInvoice';

const CircularProgression = () => {
    const totalInvoice = 40
    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='relative'>
                <div className='bg-white w-16 h-16 text-base gap-2 font-bold rounded-full flex flex-col justify-center absolute top-4 left-4  items-center'>
                    <div className='text-[#16A7D3] text-2xl'>
                        <GrDocumentText></GrDocumentText>
                    </div>
                    <h1>{totalInvoice}</h1>
                </div>
                <CircularProgressInvoice ProgressPercentage={totalInvoice}></CircularProgressInvoice>
            </div>


            <div className='flex justify-center items-center flex-col'>
                <h1>Total Invoice</h1>
                <p className='font-semibold'>৳ 194192</p>
            </div>
        </div>
    );
};

export default CircularProgression;
import React from 'react';

import { GrDocumentText } from 'react-icons/gr';
import CircularProgressInvoice from './CircularProgrssInvoice';

const CircularProgression = ({title, balance, count, iconName, outlineCOlor}) => {
    
    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='relative'>
                <div className='bg-white w-16 h-16 text-base gap-2 font-bold rounded-full flex flex-col justify-center absolute top-4 left-4  items-center'>
                    <div className={`text-[${outlineCOlor}] text-2xl`}>
                       {iconName}
                    </div>
                    <h1>{count}</h1>
                </div>
                <CircularProgressInvoice stroke={outlineCOlor} ProgressPercentage={count}></CircularProgressInvoice>
            </div>


            <div className='flex justify-center items-center flex-col'>
                <h1>{title}</h1>
                <p className='font-semibold'>{balance}</p>
            </div>
        </div>
    );
};

export default CircularProgression;
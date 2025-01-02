import React from 'react';

import { TbCurrencyTaka } from 'react-icons/tb';
import pickRequest from '../../assets/Icons/pick request.png'
import FirstRow from './FirstRow';
import SecondRow from './secondRow';

const DashBoardPage = () => {
    return (
        <div>
            {/* Page Heading */}
            <div className='mb-10'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-base text-[#4E4E4E]'>Let’s check your update today & Total</p>
            </div>

            {/* main section */}

            {/* 1st row */}
            <div>
                <FirstRow></FirstRow>
            </div>

            {/* 2nd row */}
            <div className='mt-8'>

                <SecondRow></SecondRow>
            </div>
        </div>
    );
};

export default DashBoardPage;
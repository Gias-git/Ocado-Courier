
import { useState } from 'react';
import GraphSection from './Components/GraphSection';
import ParcelManagementOverview from './Components/ParcelManagementOverview';

import ToggleSwitch from './Components/ToggleSwitch';

const DashBoardPage = () => {
    const [isToday, seIisToday] = useState(true)
    return (
        <div className='overflow-y-auto mb-20'>

            {/* Page Heading */}
            <div className='mb-10 mt-10'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-base text-[#4E4E4E]'>Let’s check your update today & Total</p>
            </div>

            {/* See Your Activity Button */}
            <div className='flex justify-end gap-4 my-7'>
                <h1 className='text-sm'>See Your Activity</h1>

                <div onClick={()=>seIisToday(!isToday)}>
                    <ToggleSwitch />
                </div>

            </div>



            {/* main section */}

            {/* stat cards */}
            <div>
                <ParcelManagementOverview isToday={isToday}></ParcelManagementOverview>
            </div>

            {/* Graph section */}

            <div>
                <GraphSection></GraphSection>
            </div>
        </div>
    );
};

export default DashBoardPage;
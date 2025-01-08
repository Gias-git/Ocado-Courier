
import FirstRow from './FirstRow';
import GraphSection from './GraphSection';
import SecondRow from './secondRow';
import ToggleSwitch from './ToggleSwitch';

const DashBoardPage = () => {
    return (
        <div className='overflow-y-auto '>
            {/* Page Heading */}
            <div className='mb-10'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-base text-[#4E4E4E]'>Let’s check your update today & Total</p>
            </div>

            {/* See Your Activity Button */}
            <div className='flex justify-end gap-4 my-7'>
                <h1 className='text-sm'>See Your Activity</h1>

                <div className=''>
                    <ToggleSwitch />
                </div>

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

            {/* Graph section */}

            <div>
                <GraphSection></GraphSection>
            </div>
        </div>
    );
};

export default DashBoardPage;
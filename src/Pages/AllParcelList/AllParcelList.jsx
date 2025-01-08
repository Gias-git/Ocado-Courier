import React from 'react';
import SortingSection from './SortingSection';

const AllParcelList = () => {
    return (
        <div className='mt-6'>

            {/* Hading */}
            <div>
                <h1 className='text-2xl font-bold font-lato'>All Parcel List</h1>
            </div>

            {/* Sorting Section */}
            <SortingSection></SortingSection>

        </div>
    );
};

export default AllParcelList;
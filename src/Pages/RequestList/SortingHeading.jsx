import React from 'react';

const SortingHeading = () => {
    return (
        <div className='flex justify-evenly bg-white border-[0.5px] rounded-md px-11 py-4 mt-4 '>
            {/* By date filter */}
            <div>
                <div className="flex items-center border rounded-md px-4 py-2 ">
                    <input
                        type="date"
                        placeholder="Start date"
                        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    />
                    <span className="mx-2 text-gray-500">↔</span>
                    <input
                        type="date"
                        placeholder="End date"
                        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    />

                </div>
            </div>

            {/* Filter by parcel Id name/phone */}
            <div>
                <label className="input input-bordered flex items-center gap-2">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>

                    <input type="text" className="grow" placeholder="Parcel ID Name/Phone" />
                </label>
            </div>


            {/* Filter by  pick up location */}
            <div>
                <select className="select select-bordered w-full ">
                    <option disabled selected>Parcel ID Name/Phone</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>



            {/* Execute Buttons */}
            <div className='flex gap-4 '>
                <button className='text-primaryColor font-bold text-[14px] px-[26px] py-[5px] border-[0.5px] rounded-md border-primaryColor'>Filter</button>
                <button className='text-primaryColor font-bold text-[14px] px-[26px] py-[5px] border-[0.5px] rounded-md border-primaryColor'>Clear</button>
            </div>
        </div>
    );
};

export default SortingHeading;
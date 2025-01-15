
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const SortingSection = () => {
    return (
        <div className='flex flex-col gap-4 lg:flex-row lg:justify-evenly items-center bg-white border-[0.5px] rounded-md  py-4 mt-4 '>


            {/* For Desktop View */}

            <div className=' hidden lg:flex flex-col gap-4 lg:flex-row lg:justify-evenly items-center px-6  rounded-md   '>


                {/* By date filter */}
                <div>
                    {/* Date Picker */}
                    <div className="w-full lg:w-auto">
                        <RangePicker
                            style={{ width: '100%' }}
                            onChange={(dates) => setDates(dates)}
                        />
                    </div>
                    {/* <div className="flex items-center border rounded-md px-4 py-2 ">
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

                </div> */}
                </div>

                {/* Filter by parcel Id name/phone */}
                <div className="">
                    <label className="input  input-bordered flex items-center gap-2">

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




                <div className='flex gap-6 flex-col lg:flex-row'>


                    {/* today collection  */}
                    <div className='space-y-2 border-2  rounded-lg p-2'>
                        <div>
                            <h1 className='text-[14px]'>Today Collectable Amount</h1>
                        </div>
                        <div className='flex justify-between gap-2 items-center'>
                            <h3 className='text-[14px] font-bold'>৳ 45,987</h3>
                            <div className='flex flex-col border-l-4 px-1 border-orange-400'>
                                <h1 className='text-[16px] font-semibold'>50</h1>
                                <p className='text-[9px]'>Parcel</p>
                            </div>
                        </div>


                    </div>

                    {/* Execute Buttons */}

                    <div className='flex justify-center items-center'>
                        <div className='flex gap-4 '>
                            <button className='text-primaryColor font-bold text-[14px] px-[26px] py-[5px] border-[0.5px] rounded-md border-primaryColor'>Filter</button>
                            <button className='text-primaryColor font-bold text-[14px] px-[26px] py-[5px] border-[0.5px] rounded-md border-primaryColor'>Clear</button>
                        </div>

                    </div>




                    {/* Export CSV */}
                    <div className='flex justify-center items-center'>
                        <h1 className='text-primaryColor font-semibold'>Export CSV</h1>
                    </div>

                </div>
            </div>






            {/* For Mobile View */}
            <div className='lg:hidden space-y-5'>

                {/* title */}
                <div className='text-xl  lg:hidden font-medium'>
                    <h1>Delivery Parcel List | 03 Parcels</h1>
                    <hr className='border-2 border-primaryColor w-3/12' />
                </div>

                {/* Filter by parcel Id name/phone */}
                <div className="">
                    <label className="input  input-bordered flex items-center gap-2">

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

                {/* By date filter */}
                <div>
                    {/* Date Picker */}
                    <div className="w-full lg:w-auto">
                        <RangePicker
                            style={{ width: '100%' }}
                            onChange={(dates) => setDates(dates)}
                        />
                    </div>
                </div>




                
                <div className='flex gap-4  flex-col'>


                    {/* today collection  */}
                    <div className='space-y-2 border-2  rounded-lg p-2'>
                        <div>
                            <h1 className='text-[14px]'>Today Collectable Amount</h1>
                        </div>
                        <div className='flex justify-between gap-2 items-center'>
                            <h3 className='text-[14px] font-bold'>৳ 45,987</h3>
                            <div className='flex flex-col border-l-4 px-1 border-orange-400'>
                                <h1 className='text-[16px] font-semibold'>50</h1>
                                <p className='text-[9px]'>Parcel</p>
                            </div>
                        </div>


                    </div>

                    {/* Execute Buttons */}

                    <div className=''>
                        <div className='flex gap-4 '>
                            <button className='text-primaryColor font-bold text-[14px] px-[26px] py-[5px] border-[0.5px] rounded-md border-primaryColor'>Filter</button>
                            <button className='text-primaryColor font-bold text-[14px] px-[26px] py-[5px] border-[0.5px] rounded-md border-primaryColor'>Clear</button>
                        </div>

                    </div>




                    {/* Export CSV */}
                    <div className='flex justify-center items-center hidden lg:block'>
                        <h1 className='text-primaryColor font-semibold'>Export CSV</h1>
                    </div>

                </div>




            </div>


        </div>
    );
};

export default SortingSection;
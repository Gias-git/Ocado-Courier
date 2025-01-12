import { BsFiletypePdf } from 'react-icons/bs';

import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import CharDeliveredParcel from './Components/CharDeliveredParcel';
import TrackingTimeline from './Components/TrackingTimeline';

const ParcelView = () => {
    return (
        <div className='mt-10'>
            {/* Heading */}
            <div className='flex justify-between'>
                <div>
                    <Link to='/requestList' className='flex gap-4 items-center'> <FaArrowLeftLong></FaArrowLeftLong> <h1 className='text-[22px] font-bold'>Parcel Id : 1211123123 </h1> </Link>
                </div>

                <div className='space-x-4'>
                    <button className="text-[#E83330]  px-6 text-[12px] py-2 border-[1px] border-[#E83330]  rounded-md">Invoice</button>
                    <button className="text-white bg-[#E83330]  px-6 text-[12px] py-2 border-[1px] border-[#E83330]  rounded-md">Edit</button>
                    <button className="text-[#E83330]  px-6 text-[12px] py-2 border-[1px] border-[#E83330]  rounded-md">Cancel</button>
                </div>

            </div>

            <div className='bg-white p-12 my-8'>
                {/* Details Delivered Parcel */}
                <div>
                    <CharDeliveredParcel></CharDeliveredParcel>
                </div>

                {/* Introduction */}

                <div>
                    <h1 className='text-[20px] font-semibold'>Introduction</h1>

                    <div className='min-h-[71px] border-2 border-primaryColor mt-3'>

                    </div>
                </div>




                {/* Trace Update */}

                <div className='mt-16'>
                    <h1 className='text-[20px] font-semibold border-l-4 border-primaryColor px-2'>Trace Update</h1>

                    <div>
                        <TrackingTimeline></TrackingTimeline>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ParcelView;
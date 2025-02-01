import addParcel from '../assets/Icons/AddParcel.png'
import vectorBg from '../assets/Icons/vectorBg.png'
import BulkImport from '../assets/Icons/BulkImport.png'
import ExpressDelivery from '../assets/Icons/ExpressDelivery.png'
import AllParcel from '../assets/Icons/AllParcel.png'
import { Link } from 'react-router-dom'


const StartComponent = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${vectorBg})` }} className={`xl:w-8/12 w-10/12 mx-auto flex  rounded-b-3xl  p-1  bg-cover`}>

                {/* add parcel */}


                <Link to='/addParcel' className='flex   justify-center gap-4 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={addParcel} alt="" />
                    <h1>Add Parcel</h1>
                </Link>

                <Link to='/allParcelList' className='flex justify-center gap-4 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={BulkImport} alt="" />
                    <h1>Bulk Import</h1>
                </Link>

                <Link to='/allParcelList'  className='flex justify-center gap-4 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={ExpressDelivery} alt="" />
                    <h1>Express Delivery</h1>
                </Link>

                <Link to='/allParcelList'  className='flex justify-center gap-4 items-center py-2 w-3/12'>
                    <img src={AllParcel} alt="" />
                    <h1>All Parcel</h1>
                </Link>
            </div>
        </div>
    );
};

export default StartComponent;
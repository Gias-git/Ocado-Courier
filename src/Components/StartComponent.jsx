import addParcel from '../assets/Icons/AddParcel.png'
import vectorBg from '../assets/Icons/vectorBg.png'
import BulkImport from '../assets/Icons/BulkImport.png'
import ExpressDelivery from '../assets/Icons/ExpressDelivery.png'
import AllParcel from '../assets/Icons/AllParcel.png'


const StartComponent = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${vectorBg})` }} className={`w-6/12 mx-auto flex  rounded-b-3xl  p-2  bg-cover`}>
           
                {/* add parcel */}
                

                <div className='flex justify-center gap-4 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={addParcel} alt="" />
                    <h1>Add Parcel</h1>
                </div>

                <div className='flex justify-center gap-4 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={BulkImport} alt="" />
                    <h1>Bulk Import</h1>
                </div>

                <div className='flex justify-center gap-4 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={ExpressDelivery} alt="" />
                    <h1>Express Delivery</h1>
                </div>

                <div className='flex justify-center gap-4 items-center py-2 w-3/12'>
                    <img src={AllParcel} alt="" />
                    <h1>All Parcel</h1>
                </div>
            </div>
        </div>
    );
};

export default StartComponent;
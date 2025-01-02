import addParcel from '../assets/Icons/Add parcel.png'
import vectorBg from '../assets/Icons/vectorBg.png'


const StartComponent = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${vectorBg})` }} className={`w-6/12 mx-auto flex  rounded-b-3xl  p-2  bg-cover`}>
           
                {/* add parcel */}
                

                <div className='flex justify-center gap-2 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={addParcel} alt="" />
                    <h1>Add Parcel</h1>
                </div>

                <div className='flex justify-center gap-2 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={addParcel} alt="" />
                    <h1>Add Parcel</h1>
                </div>

                <div className='flex justify-center gap-2 items-center py-2 border-r-2 border-[#A9A9A9] w-3/12'>
                    <img src={addParcel} alt="" />
                    <h1>Add Parcel</h1>
                </div>

                <div className='flex justify-center items-center py-2 w-3/12'>
                    <img src={addParcel} alt="" />
                    <h1>Add Parcel</h1>
                </div>
            </div>
        </div>
    );
};

export default StartComponent;
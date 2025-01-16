import addParcelBg from '../../assets/Icons/addParcelBackground.png'
import addParcelIcon from '../../assets/Icons/mobileAddParcelIcon.png'
import allParcelBackground from '../../assets/Icons/allParcelBackground.png'
import ExpressDeliveryBg from '../../assets/Icons/bulkImportBg.png'

const MobileBottomMenuPlusButtonPopup = ({ isMobileBottomPopupOpen, setIsMobileBottomPopupOpen }) => {

    console.log(isMobileBottomPopupOpen)
    return (
        <div className={`flex gap-5 justify-center items-center transition-transform duration-700 ease-in-out mx-auto py-1 ${isMobileBottomPopupOpen && 'transform translate-y-0'}  ${isMobileBottomPopupOpen || 'transform translate-y-40'}   `}>
            <div>
                <div
                    className="w-[50px] h-[50px] relative   flex items-center justify-center">
                    <img className='w-[50px] h-[50px] ' src={addParcelBg} alt="Parcel Icon" />

                    <img className='w-[22px] absolute inset-4' src={addParcelIcon} alt="" />
                </div>
            </div>


            <div className='-mt-14'>
                <div
                    className="w-[50px] h-[50px] relative   flex items-center justify-center"

                >
                    <img className='w-[50px] h-[50px] ' src={allParcelBackground} alt="Parcel Icon" />

                    <img className='w-[22px] absolute inset-4' src={addParcelIcon} alt="" />
                </div>
            </div>


            <div>
                <div
                    className="w-[50px] h-[50px] relative   flex items-center justify-center"

                >
                    <img className='w-[50px] h-[50px] ' src={ExpressDeliveryBg} alt="Parcel Icon" />

                    <img className='w-[22px] absolute inset-4' src={addParcelIcon} alt="" />
                </div>
            </div>

            {/* close Button */}

            <button onClick={()=>setIsMobileBottomPopupOpen(false)} className='w-8 h-8 rounded-full bg-white absolute mt-14 shadow-lg flex justify-center items-center'>
                <h1 className='font-semibold'> X </h1>
            </button>

        </div>
    );
};

export default MobileBottomMenuPlusButtonPopup;
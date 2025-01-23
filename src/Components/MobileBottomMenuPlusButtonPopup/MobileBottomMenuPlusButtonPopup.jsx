import addParcelBg from '../../assets/Icons/addParcelBackground.png'
import addParcelIcon from '../../assets/Icons/mobileAddParcelIcon.png'
import allParcelIcon from '../../assets/Icons/allParcelMobileIcon.png'
import ExpressDeliveryIcon from '../../assets/Icons/ExchangeMobileIcon.png'
import allParcelBackground from '../../assets/Icons/allParcelBackground.png'
import ExpressDeliveryBg from '../../assets/Icons/bulkImportBg.png'
import { Link } from 'react-router-dom';

const MobileBottomMenuPlusButtonPopup = ({ isMobileBottomPopupOpen, setIsMobileBottomPopupOpen }) => {

    return (
        <div
            className={`flex min-h-48 -mb-24  gap-5 justify-center items-top transition-transform duration-700 ease-in-out mx-auto py-1 origin-center ${isMobileBottomPopupOpen ? 'rotate-0 ' : '-rotate-180 '
                }`}
        >

            <div className=''>
                <Link to='/addParcel'>
                    <div
                        className="w-[50px] h-[50px] relative   flex items-center justify-center">
                        <img className='w-[50px] h-[50px] ' src={addParcelBg} alt="Parcel Icon" />

                        <img className='w-[22px] absolute inset-4' src={addParcelIcon} alt="" />
                    </div>
                </Link>
            </div>


            <div className='-mt-14'>
                <Link to='/allParcelList'>
                    <div
                        className="w-[50px] h-[50px] relative   flex items-center justify-center"

                    >
                        <img className='w-[50px] h-[50px] ' src={allParcelBackground} alt="Parcel Icon" />

                        <img className='w-[22px] absolute inset-4' src={allParcelIcon} alt="" />
                    </div>

                </Link>
            </div>


            <div>
                <Link to='/allParcelList'>
                    <div
                        className="w-[50px] h-[50px] relative   flex items-center justify-center"

                    >
                        <img className='w-[50px] h-[50px] ' src={ExpressDeliveryBg} alt="Parcel Icon" />

                        <img className='w-[22px] absolute inset-4' src={ExpressDeliveryIcon} alt="" />
                    </div>
                </Link>
            </div>



        </div>
    );
};

export default MobileBottomMenuPlusButtonPopup;
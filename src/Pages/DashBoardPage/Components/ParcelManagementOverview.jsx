import { TbCurrencyTaka } from 'react-icons/tb';
import parcelProcess from '../../../assets/Icons/parcelPackage.png'
import Delivered from '../../../assets/Icons/delivered.png'
import OnHold from '../../../assets/Icons/OnHold.png'
import ReadyForDelivery from '../../../assets/Icons/ReadyForDelivery.png'
import PickRequest from '../../../assets/Icons/pickRequest.png'
import returned from '../../../assets/Icons/returned.png'
import TotalOverview from './TotalOverview';
import PaymentReadyGenerate from './paymentReadyGenerate';
import PaymentRelease from './PaymentRelease';
import PaymentMethod from './PaymentMethod';

const ParcelManagementOverview = ({ isToday }) => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>


            {/* pick request */}
           <a href="#" className='flex bg-[#FFFFFF]  order-1  relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'> {isToday && 30} {isToday || 130}</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 border-[#C65F32] flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> {isToday && 66542} {isToday || 323454}  </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={PickRequest} alt="" />
                </div>
            </a>


            {/* parcelProcess request */}
            <a href="#" className='flex bg-[#FFFFFF] order-2 relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#C65F32]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{isToday && 70} {isToday || 1130}</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Parcel Process</p>
                    <div className='font-bold border-l-2 border-[#C65F32] flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#C65F32]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> {isToday && 32340} {isToday || 11230}</h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={parcelProcess} alt="" />
                </div>
            </a>



            {/* Ready For Delivery */}
            <a href="#" className='flex bg-[#FFFFFF] order-3 relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#12806B]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{isToday && 310} {isToday || 1130}</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Ready For Delivery</p>
                    <div className='font-bold border-l-2 border-[#12806B] flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#12806B]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> {isToday && 31210} {isToday || 112330} </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={ReadyForDelivery} alt="" />
                </div>
            </a>



            {/* Delivered */}
            <a href="#" className='flex bg-[#FFFFFF] order-4 relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#1EC672]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{isToday && 230} {isToday || 11330}</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Delivered</p>
                    <div className='font-bold border-l-2 border-[#1EC672] flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#1EC672]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> {isToday && 310} {isToday || 123130} </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={Delivered} alt="" />
                </div>
            </a>



            {/* On Hold */}
            <a href="#" className='flex bg-[#FFFFFF] order-5 relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{isToday && 70} {isToday || 120}</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>On Hold</p>
                    <div className='font-bold border-l-2 border-[#A60C0C] flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> {isToday && 1230} {isToday || 131230} </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={OnHold} alt="" />
                </div>
            </a>


            {/* paymentReadyGenerate */}
            <div className="col-span-2 order-7 bg-[#ffff] p-4 rounded-xl">

                <PaymentReadyGenerate></PaymentReadyGenerate>

            </div>


            {/* returned */}
            <div className='flex bg-[#FFFFFF] lg:order-7 order-6  relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{isToday && 14} {isToday || 2130}</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Returned</p>
                    <div className='font-bold border-l-2 border-[#9F4747] flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> {isToday && 630} {isToday || 123130} </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={returned} alt="" />
                </div>
            </div>




            {/* Total Overview */}

            <div className="col-span-2 order-6  lg:order-8  row-span-2 bg-[#ffff] p-4 rounded-xl ">
                <TotalOverview></TotalOverview>
            </div>


            {/*Payment Release*/}

            <div className="col-span-2 order-9 ">
                <PaymentRelease></PaymentRelease>
            </div>


            {/* Payment Method */}
            <div className="col-span-2 lg:col-span-1 order-10 rounded-xl flex flex-col gap-4 ">
                <h1 className='text-lg font-semibold'> Payment Method </h1>

                <div className='w-full'>
                    <PaymentMethod></PaymentMethod>
                </div>

            </div>





        </div>
    );
};

export default ParcelManagementOverview;
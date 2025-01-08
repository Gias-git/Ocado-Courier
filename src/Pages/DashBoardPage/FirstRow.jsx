import { TbCurrencyTaka } from 'react-icons/tb';
import parcelProcess from '../../assets/Icons/parcelPackage.png'
import Delivered from '../../assets/Icons/delivered.png'
import OnHold from '../../assets/Icons/OnHold.png'
import ReadyForDelivery from '../../assets/Icons/ReadyForDelivery.png'
import PickRequest from '../../assets/Icons/pickRequest.png'
import Returned from './Returned';

const FirstRow = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
            {/* pick request */}
            <div className='flex bg-[#FFFFFF] relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={PickRequest} alt="" />
                </div>
            </div>


            {/* parcelProcess request */}
            <div className='flex bg-[#FFFFFF] relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>60</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Parcel Process</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={parcelProcess} alt="" />
                </div>
            </div>



            {/* Ready For Delivery */}
            <div className='flex bg-[#FFFFFF] relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>56</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Ready For Delivery</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={ReadyForDelivery} alt="" />
                </div>
            </div>



            {/* Delivered */}
            <div className='flex bg-[#FFFFFF] relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>70</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Delivered</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={Delivered} alt="" />
                </div>
            </div>



            {/* On Hold */}
            <div className='flex bg-[#FFFFFF] relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>40</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>On Hold</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div className='absolute top-3 right-3'>
                    <img className='h-14 lg:w-16 w-14 lg:h-16' src={OnHold} alt="" />
                </div>
            </div>



            <Returned></Returned>





        </div>
    );
};

export default FirstRow;
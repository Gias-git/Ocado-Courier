import { TbCurrencyTaka } from 'react-icons/tb';
import pickRequest from '../../assets/Icons/pick request.png'

const FirstRow = () => {
    return (
        <div className='grid grid-cols-5 gap-4'>
            {/* pick request */}
            <div className='flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div>
                    <img src={pickRequest} alt="" />
                </div>
            </div>

            {/* Parcel Process  */}
            <div className='flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#C65F32]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#C65F32]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div>
                    <img src={pickRequest} alt="" />
                </div>
            </div>

            {/* Ready For Delivery */}
            <div className='flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div>
                    <img src={pickRequest} alt="" />
                </div>
            </div>

            {/* Delivered */}
            <div className='flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div>
                    <img src={pickRequest} alt="" />
                </div>
            </div>

            {/* On Hold */}
            <div className='flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

                <div className=''>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                    <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                        <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                    </div>
                </div>

                <div>
                    <img src={pickRequest} alt="" />
                </div>
            </div>


        </div>
    );
};

export default FirstRow;
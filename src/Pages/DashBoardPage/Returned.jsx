import { TbCurrencyTaka } from 'react-icons/tb';
import returned from '../../assets/Icons/returned.png'

const Returned = () => {
    return (<>
        {/*  For mobile */}
        <div className='flex lg:hidden bg-[#FFFFFF] relative justify-between rounded-xl py-4 pl-5 pr-6 border-b-4 border-[#a60c0c]  shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]'>

            <div className=''>
                <h1 className='text-2xl font-bold'>58</h1>
                <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#A60C0C]'>
                    <TbCurrencyTaka /> <h1 className='font-bold'> 66542 </h1>
                </div>
            </div>

            <div className='absolute top-3 right-3'>
                <img className='h-18 lg:w-16 w-18 lg:h-16' src={returned} alt="" />
            </div>
        </div>

        {/* For Desktop View */}

        <div className='lg:flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 h-[134px] hidden  '>

            <div className=''>
                <h1 className='text-2xl font-bold'>20</h1>
                <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Returned</p>
                <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#C65F32]'>
                    <h1 className='font-bold'> ৳ 1,75,978 </h1>
                </div>
            </div>

            <div>

                <img src={returned} alt="" />
            </div>
        </div>

    </>

    );
};

export default Returned;
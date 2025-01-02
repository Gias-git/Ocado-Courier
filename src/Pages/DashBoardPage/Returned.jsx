import pickRequest from '../../assets/Icons/pick request.png'

const Returned = () => {
    return (
        <div className='flex bg-[#FFFFFF] justify-between rounded-xl py-4 pl-5 pr-6 h-[134px] '>

            <div className=''>
                <h1 className='text-2xl font-bold'>20</h1>
                <p className='my-4 text-[#202224] text-opacity-75 text-base font-semibold'>Pick Request</p>
                <div className='font-bold border-l-2 flex justify-start items-center gap-1 font-nunitoSans font-sm  text-[#C65F32]'>
                     <h1 className='font-bold'> ৳ 1,75,978 </h1>
                </div>
            </div>

            <div>
                <img src={pickRequest} alt="" />
            </div>
        </div>
    );
};

export default Returned;
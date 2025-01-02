import calenderIcon from '../../assets/Icons/calendar.png'

const PaymentMethod = () => {
    return (
        <div className=' pl-5 pr-6 py-4  bg-[#FFFFFF]'>

            <div>
                <div className='flex py-4 gap-2'> <div> <img className='w-[20px]' src={calenderIcon} alt="" /> </div> <h1 className='text-sm font-semibold text-[#666363]'>Regular Payable</h1> </div>
                <h1 className='text-[12px] font-medium'>Get paid within 2-3 days of delivery</h1>
            </div>
            <hr className='border-2 my-3' />

            <div className='flex justify-between'>
                <div>
                    <h1 className='font-medium text-[12px] text-[#666363]'>Last Paid Out</h1>
                </div>
                <div>
                    <h1 className='font-bold text-[12px]'>৳ 10,75,978</h1>
                    <p className='text-[10px] font-medium'>03 Sep 2024</p>
                </div>
            </div>

            <div>
                <h1 className='text-[12px] font-semibold'>Bank Details</h1>
            </div>
            <div className='flex justify-between'>
                <div><h1 className='text-[12px] font-medium text-[#666363]'>EBL Bank</h1></div>
                <div>
                    <p className='font-lato text-[#666363] font-semibold text-[12px]'>*********54654</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
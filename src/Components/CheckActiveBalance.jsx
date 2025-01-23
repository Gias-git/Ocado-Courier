import { useState } from 'react';
import touchIcon from '../assets/Icons/HandTouchIcon.png'
import balanceIcon from '../assets/Icons/balanceIcon.png'


const CheckActiveBalance = () => {

    const [balanceShow, setBalanceShow] = useState(false)

    return (
        <div onClick={() => setBalanceShow(!balanceShow)} className='bg-[#FFF9F9] overflow-hidden border-2 border-primaryColor w-[272px] rounded-3xl flex mx-auto lg:mt-4 mt-6 mb-4 '>
            <div className={`${balanceShow && 'transform translate-x-[280px] duration-1000'} ${balanceShow || 'transform duration-1000'} flex items-center  gap-10`}>
                <div>
                    <div className='w-12  h-12 flex justify-center items-center bg-[#ffff] shadow-lg rounded-full'>
                        <img className='w-6 mx-auto' src={touchIcon} alt="" />
                    </div>
                </div>
                <div className={`w-[150px]  ${balanceShow && 'hidden'}  ${balanceShow || 'transform  duration-1000'}`}>
                    <h1 className='text-[12px] font-semibold text-primaryColor'>Check Your Active Balance</h1>
                </div>
            </div>



            <div className={`flex justify-start items-center -ml-9 gap-3 w-full ${balanceShow || 'transform translate-y-[280px] duration-1000'}  ${balanceShow && 'transform -translate-x-[0] duration-1000'}`}>

                <div>
                    <img className='h-6 w-6' src={balanceIcon} alt="" />
                </div>

                <div>
                    <h1 className='font-semibold'>50 <span className='text-[10px]'>Parcel </span> </h1>
                </div>

                <div>
                    <h1 className='text-sm font-bold'>10,56,987 Tk</h1>
                </div>
                <div>
                <button  className='bg-primaryColor text-[#ffff] py-1 px-2 rounded-xl text-sm'>Details</button>
            </div>
            </div>

         

        </div>
    );
};

export default CheckActiveBalance;
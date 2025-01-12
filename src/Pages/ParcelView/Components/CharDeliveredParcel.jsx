import React from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import parcelViewShoptextBg from '../../../assets/Background/parcelViewShoptextBg.png'

const CharDeliveredParcel = () => {
    return (  <div className=' my-8'>

         <div>
             {/* Shopper Name */}
             <div style={{ backgroundImage: `url(${parcelViewShoptextBg})` }} className={`bg-cover w-[210px] h-[50px] mx-auto flex justify-center items-center`}>
                 <h1 className='text-center  text-[12px] font-medium text-primaryColor'>Shopper by Oronno Mart</h1>
             </div>


             {/* content container */}

             <div className=' flex justify-between'>

                 {/*======== Left Content ============ */}
                 <div>

                     {/* Parcel Details */}
                     <div>
                         <h4 className=' font-semibold flex gap-3 items-center'>Created at : October 10, 2024 11:55Am <BsFiletypePdf className='text-[#76d26f] text-lg font-bold'></BsFiletypePdf></h4>
                         <h4 className=' font-semibold flex gap-3 items-center'>Parcel Id : 543356128322 </h4>
                         <h4 className=' font-semibold flex gap-3 items-center'>Parcel Id : 543356128322 </h4>
                         <h4 className=' font-semibold flex gap-3 items-center'>Created at : October 10, 2024 11:55Am <BsFiletypePdf className='text-[#76d26f] text-lg font-bold'></BsFiletypePdf></h4>
                     </div>

                     <div className='my-6'>
                         <button className='bg-[#e2ecfa] text-[#3f81da] px-2 py-1 rounded-lg'> Transit Fulfilment </button>
                     </div>




                     <div className='flex gap-4'>
                         <div className='text-lg font-semibold px-2 py-1 border-2 border-primaryColor rounded-lg'>
                             Customer Details
                         </div>
                         <div className='text-lg font-semibold px-2 py-1 border-2 text-[#3b9085] border-[#3b9085] rounded-lg'>
                             Unpaid
                         </div>
                     </div>



                     {/* Customer Details */}

                     <div className='mt-8 space-y-3'>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Name : </span> Abdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Address : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Phone Number : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Secondary Number : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> District : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Parcel Area : </span> ABdul Gulum</h1>

                     </div>

                 </div>

                 {/*======== Right Content ============ */}
                 <div className='space-y-3'>

                     {/*  Delivery Convey Info */}
                     <div className='text-lg font-semibold px-2 py-1 border-2 text-center border-primaryColor '>
                         Delivery Convey Info
                     </div>
                     <div className='text-right space-y-2 mt-3'>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Name : </span> Abdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Address : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Phone Number : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Secondary Number : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> District : </span> ABdul Gulum</h1>
                         <h1 className='font-semibold'> <span className='text-[#4e4e4e]'> Parcel Area : </span> ABdul Gulum</h1>
                     </div>



                     {/* Exchange */}
                     <div className='text-lg font-semibold px-2 py-1 border-2 bg-[#ec9777] text-white  text-center rounded-lg'>
                         Exchange
                     </div>

                     <div>
                         <h1 className='font-semibold text-right'>Package</h1>
                         <h1 className='font-semibold text-right'>Package</h1>
                         <h1 className='font-semibold text-right'>Package</h1>
                         <h1 className='font-semibold text-right'>Package</h1>
                         <h1 className='font-semibold text-right'>Package</h1>
                     </div>

                 </div>


             </div>
         </div>



     </div>
    );
};

export default CharDeliveredParcel;
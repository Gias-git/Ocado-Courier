import { Link } from 'react-router-dom';
import logo from '../../assets/ocadologo 2.png'

const ProfileSideBar = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 '>

            {/* profile  img and id container */}

            <div>

                <div className=' w-[130px] rounded-full bg-gray-100 flex justify-center items-center h-[130px]'>
                    <img className='object-cover' src={logo} alt="" />
                </div>

                {/* Merchant name & Id  */}
                <div className='text-center mt-5 mb-7'>
                    <h1 className='font-semibold '>Shop Name</h1>
                    <p className='text-[#888888] text-[12px] font-lato font-medium my-'>44545478</p>
                </div>
            </div>



            {/* Merchant summery Container */}

            <div className='w-full'>

                <div>
                    <h1 className='text-lg font-semibold mb-2 text-center'>Summary</h1>
                </div>

                <div className='font-lato flex justify-between border-y-2 w-full px-9 py-5 text-[15px] font-semibold text-[#717579]'>
                    <h1> DexinLab </h1>
                    <h1> 500 </h1>
                </div>

                <div className='font-lato flex justify-between border-b-2 w-full px-9 py-5 text-[15px] font-semibold text-[#717579]'>
                    <h1> DexinLab </h1>
                    <h1> 500 </h1>
                </div>

                <div className='font-lato flex justify-between border-b-2 w-full px-9 py-5 text-[15px] font-semibold text-[#717579]'>
                    <h1> DexinLab </h1>
                    <h1> 500 </h1>
                </div>
            </div>




            {/* Edit & Payment Update Container */}

            <div className='px-5 py-8 space-y-4'>

              <Link to='/profile/editProfile'>  <button className='text-[13px] font-semibold w-full border-2 rounded-md px-16 py-3 hover:bg-[#e8333036] hover:text-primaryColor hover:border-primaryColor'>Edit Profile</button></Link>
              <Link to='/profile/paymentUpdate'>  <button className='text-[13px] font-semibold w-full border-2 rounded-md px-12 py-3 mt-4 hover:bg-[#e8333036] hover:text-primaryColor hover:border-primaryColor'>Payment Update</button></Link>

            </div>


        </div>
    );
};

export default ProfileSideBar;
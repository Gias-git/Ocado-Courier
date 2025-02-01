import logo from '../../assets/navImg.png'
import deliveryBox from '../../assets/Background/deliveryBox.png'
import deliveryman from '../../assets/Background/deliveryman.png'
import drone from '../../assets/Background/drone.png'
import bgIcons from '../../assets/Background/bgicons.png'
import { PiBagSimpleLight, PiEnvelopeSimpleThin, PiMapPinLineThin, PiPhoneCallThin } from 'react-icons/pi'
import { CiLock, CiUser } from 'react-icons/ci'
import { LuMapPin } from 'react-icons/lu'
import { FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='min-h-screen  text-sm font-lato flex flex-col justify-center items-center gap-8 relative my-10'>

            {/* Background Design */}
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='absolute bottom-0 right-0 hidden lg:block w-[240px]'>
                <img src={deliveryBox} alt="" />
            </div>

            <div className='absolute bottom-0 hidden lg:block left-0 w-[240px]'>
                <img src={deliveryman} alt="" />
            </div>
            <div className='absolute left-4 hidden lg:block top-10 w-[88px]'>
                <img src={drone} alt="" />
            </div>
            <div className='absolute right-8 hidden lg:block top-8 w-[88px]'>
                <img src={drone} alt="" />
            </div>
            <div className='absolute right-56 hidden lg:block top-48 w-[88px]'>
                <img src={drone} alt="" />
            </div>
            <div className='absolute -left-20 -top-400 hidden lg:block w-[900px] '>
                <img src={bgIcons} alt="" />
            </div>
            <div className='absolute -right-20 -top-400 hidden lg:block w-[900px] '>
                <img src={bgIcons} alt="" />
            </div>





            {/* Register container */}
            <div className='md:max-w-[450px] w-5/6  p-5 border-2 rounded-xl z-10'>

                <div className='flex flex-col text-center gap-2 mb-10'>
                    <h1 className=' text-2xl font-semibold font-lato'>Merchant Register</h1>
                    <p className='text-[#AAA3A0] text-base'>Enter your email & password to login</p>

                </div>

                {/* Register Form */}
                <form className="space-y-5">

                    {/* Your Business Name */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="text-[#717579]">Business Name</span>
                        </label>
                        <input type="text" placeholder="Your Business Name" className="input input-bordered focus:outline-none focus:border-[#E83330]" required />
                        <div className='absolute right-2 top-12'>
                            <PiBagSimpleLight className='text-2xl text-[#989898]' />
                        </div>
                    </div>



                    {/* Your  Name */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="text-[#717579]">Name</span>
                        </label>
                        <input type="text" placeholder="Your  Name" className="input input-bordered focus:outline-none focus:border-[#E83330]" required />
                        <div className='absolute right-2 top-12'>
                            <CiUser className='text-2xl text-[#989898]' />
                        </div>
                    </div>



                    {/* Your Address */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="text-[#717579]">Address</span>
                        </label>
                        <textarea className="textarea textarea-bordered input h-24 focus:outline-none focus:border-[#E83330]" placeholder="Enter your pickup address"></textarea>

                        <div className='absolute right-2 top-12'>
                            <PiMapPinLineThin className='text-2xl text-[#989898]' />
                        </div>
                    </div>


                    {/* Number  */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="text-[#717579]">Number</span>
                        </label>
                        <input type="text" placeholder="Your number" className="input input-bordered focus:outline-none focus:border-[#E83330]" required />
                        <div className='absolute right-2 top-12'>
                            <PiPhoneCallThin className='text-2xl text-[#989898]' />
                        </div>
                    </div>



                    {/* Email Address */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="text-[#717579]">Email Address</span>
                        </label>
                        <input type="email" placeholder="Your mail address" className="input input-bordered focus:outline-none focus:border-[#E83330]" required />
                        <div className='absolute right-2 top-12'>
                            <PiEnvelopeSimpleThin className='text-2xl text-[#989898]' />
                        </div>
                    </div>


                    {/* Password Container */}
                    <div className='flex justify-between flex-col md:flex-row gap-4'>

                        {/* Password */}
                        <div className=" relative ">
                            <label className="label">
                                <span className="text-[#717579]">Password</span>
                            </label>
                            <input type="password" placeholder="*********" className="input input-bordered w-full md:w-44 focus:outline-none focus:border-[#E83330]" required />
                            <div className='absolute right-2 top-12'>
                                <CiLock className='text-2xl text-[#989898]' />
                            </div>
                        </div>

                        {/* Confirm Password */}

                        <div className=" relative ">
                            <label className="label">
                                <span className="text-[#717579]">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="*********" className="input input-bordered w-full md:w-44 focus:outline-none focus:border-[#E83330]" required />
                            <div className='absolute right-2 top-12'>
                                <CiLock className='text-2xl text-[#989898]' />
                            </div>
                        </div>
                    </div>

                    {/* checked button */}
                    <div className='flex gap-3'>
                        <input
                            type="checkbox"
                            className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                        />
                        <h1 className='text-[#717579]'>Remember password</h1>
                    </div>

                    {/* submit button */}

                    <div className='w-full  flex justify-center items-center'>
                        <button className='w-10/12  bg-primaryColor py-3 rounded-lg text-white'>
                            Sign in
                        </button>
                    </div>

                    <div className='py-10'>
                        <h1 className='text-[#AAA3A0] font-lato text-center'>Have an account? <Link to='/login' className='text-primaryColor'>Login </Link>   Here</h1>
                    </div>




                </form>
            </div>
        </div>
    );
};

export default Register;
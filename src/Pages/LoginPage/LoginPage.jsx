import logo from '../../assets/navImg.png'
import deliveryBox from '../../assets/Background/deliveryBox.png'
import deliveryman from '../../assets/Background/deliveryman.png'
import drone from '../../assets/Background/drone.png'
import bgIcons from '../../assets/Background/bgicons.png'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className='min-h-screen text-sm font-lato flex flex-col justify-center items-center gap-8 relative'>
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

            {/* login container */}
            <div className='lg:min-w-[450px] p-5 border-2 rounded-xl z-10'>

                <div className='flex flex-col text-center gap-2 '>
                    <h1 className=' text-2xl font-medium'>Merchant Login</h1>
                    <p className='text-[#AAA3A0] text-base'>Enter your email & password to login</p>
                </div>

                {/* Login Form */}
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#717579]">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered focus:outline-none focus:border-[#E83330]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#717579]">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered focus:outline-none focus:border-[#E83330]" required />

                    </div>
                    {/* checked button */}
                    <div className='flex gap-3'>
                        <input
                            type="checkbox"
                            className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                        />
                        <h1 className='text-[#717579]'>Remember password</h1>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primaryColor text-white">Login</button>
                    </div>
                </form>
                <div className='py-10'>
                    <h1 className='text-[#AAA3A0] font-lato text-center'>Don't have account?? <Link to='/register' className='text-primaryColor'>Register</Link>   Here</h1>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
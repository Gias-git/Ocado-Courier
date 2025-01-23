import { Link } from 'react-router-dom';
import pageNotFound from '../assets/Background/PageNotFound.png'

const PageNotFound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div>
                <img className='h-[500px] w-[500px]' src={pageNotFound} alt="" />
            </div>

            <div className='space-y-3 -mt-12'>
                <h1 className='text-[#4E4E4E] font-bold text-3xl text-center'>Page Not Found.</h1>
                <p className='text-[#A2A2A2] text-[22px]'>Make sure wife or data is turned on then try again</p>
            </div>

            <div>
                <Link to='/'> <button className='bg-primaryColor px-7 py-2 text-white mt-4'>BACK  DASHBOARD</button> </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
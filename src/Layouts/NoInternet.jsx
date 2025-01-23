import noInternet from '../assets/Background/noInternet.png'

const NoInternet = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div>
                <img className='h-[500px] w-[500px]' src={noInternet} alt="" />
            </div>

            <div className='space-y-3 -mt-12'>
                <h1 className='text-[#4E4E4E] font-bold text-3xl text-center'>Oops! No Internet Connection.</h1>
                <p className='text-[#A2A2A2] text-[22px]'>Make sure wife or data is turned on then try again</p>
            </div>

            <div>
                <button className='bg-primaryColor px-7 py-2 text-white mt-4'>TRY  AGAIN</button>
            </div>
        </div>
    );
};

export default NoInternet;
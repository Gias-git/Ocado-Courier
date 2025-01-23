import ParcelNotFoundImg from '../assets/Background/ParcelNotFound.png';

const ParcelNotFound = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <div>
                <img className='h-[400px] w-[400px] ' src={ParcelNotFoundImg} alt="" />
            </div>

            <div className='space-y-3 mb-11'>
                <h1 className='text-[#4E4E4E] font-bold text-3xl text-center'>Parcel Not Found</h1>
                <p className='text-[#A2A2A2] text-[18px] font-lato text-center '>Please add your parcel and enjoy our superfast <br /> delivery & payment service</p>
            </div>

           
        </div>
    );
};

export default ParcelNotFound;
import React from 'react';
import PaymentReadyGenerate from './paymentReadyGenerate';
import Returned from './Returned';
import PaymentRelease from './PaymentRelease';
import PaymentMethod from './PaymentMethod';
import TotalOverview from './TotalOverview';

const SecondRow = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-8">

                <div className="col-span-2 lg:hidden row-span-2 bg-[#ffff] p-4 rounded-xl ">

                    <TotalOverview></TotalOverview>
                </div>

                {/* paymentReadyGenerate */}
                <div className="col-span-2 bg-[#ffff] p-4 rounded-xl">

                    <PaymentReadyGenerate></PaymentReadyGenerate>

                </div>




                {/* returned */}
                <div className="col-span-1 bg-[#ffff]  rounded-xl shadow-md">
                    <Returned></Returned>
                </div>

                <div className="col-span-2 hidden lg:block row-span-2 bg-[#ffff] p-4 rounded-xl ">

                    <TotalOverview></TotalOverview>
                </div>



                {/*Payment Release*/}

                <div className="col-span-2  ">
                    <PaymentRelease></PaymentRelease>
                </div>


                {/* Payment Method */}
                <div className="col-span-1 bg-white  rounded-xl flex flex-col gap-4 ">
                    <h1 className='text-lg font-semibold'> Payment Method </h1>

                    <PaymentMethod></PaymentMethod>
                </div>


            </div>
        </div>
    );
};

export default SecondRow;
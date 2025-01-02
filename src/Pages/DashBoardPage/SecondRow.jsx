import React from 'react';
import PaymentReadyGenerate from './paymentReadyGenerate';
import Returned from './Returned';
import PaymentRelease from './PaymentRelease';

const SecondRow = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-4">


                {/* paymentReadyGenerate */}
                <div className="col-span-2 bg-[#ffff] p-4 rounded-xl shadow-md">

                    <PaymentReadyGenerate></PaymentReadyGenerate>

                </div>

                <div className="col-span-1 bg-[#ffff]  rounded-xl shadow-md">
                    <Returned></Returned>
                </div>

                <div className="col-span-2 row-span-2 bg-[#ffff] p-4 rounded-xl shadow-md">
                    <h1> PaymentReady </h1>
                    {/* <PaymentRelease /> */}
                </div>



                {/*Payment Release*/}


                <div className="col-span-2  bg-[#ffff] p-4 rounded-xl shadow-md">
                    <PaymentRelease></PaymentRelease>
                </div>
                <div className="col-span-1 bg-white p-4 rounded-xl shadow-md">
                    <h1> PaymentReady </h1>
                    {/* <PaymentMethod /> */}
                </div>


            </div>
        </div>
    );
};

export default SecondRow;
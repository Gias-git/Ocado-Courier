import React from 'react';
import CircularProgression from './Components/CircularProgression';


const PaymentInvoiceList = () => {
    return (
        <div>


            {/* circular Progression container */}
            <div className='bg-white flex justify-evenly py-2'>
               <CircularProgression></CircularProgression>
               <CircularProgression></CircularProgression>
               <CircularProgression></CircularProgression>
               <CircularProgression></CircularProgression>
            </div>
        </div>
    );
};

export default PaymentInvoiceList;
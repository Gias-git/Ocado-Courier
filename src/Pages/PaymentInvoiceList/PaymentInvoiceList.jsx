import React from 'react';
import CircularProgression from './Components/CircularProgression';
import InvoiceTableList from './Components/InvoiceTableList';
import PaymentInvoicePagination from './Components/PaymentInvoicePagination';


const PaymentInvoiceList = () => {
    return (
        <div>


            {/* circular Progression container */}
            <div className='bg-white grid grid-cols-2 lg:grid-cols-4 justify-evenly py-2'>
                <CircularProgression></CircularProgression>
                <CircularProgression></CircularProgression>
                <CircularProgression></CircularProgression>
                <CircularProgression></CircularProgression>
            </div>

            


            {/* Invoice table list */}
            <div>

                <InvoiceTableList></InvoiceTableList>

            </div>


            {/* Pagination */}

            <div className='mt-10'>
                <PaymentInvoicePagination></PaymentInvoicePagination>
            </div>
        </div>
    );
};

export default PaymentInvoiceList;
import React from 'react';
import CircularProgression from './Components/CircularProgression';
import InvoiceTableList from './Components/InvoiceTableList';
import PaymentInvoicePagination from './Components/PaymentInvoicePagination';
import { GrDocumentText } from 'react-icons/gr';


const PaymentInvoiceList = () => {
    const icon = <>
        <GrDocumentText></GrDocumentText>
    </>
    return (
        <div>


            {/* circular Progression container */}
            <div className='bg-white grid grid-cols-2 lg:grid-cols-4 justify-evenly py-2'>

                {/* Total Invoice */}
                <CircularProgression title='Total Invoice' balance='৳ 194192' count='45' iconName={icon} outlineCOlor='#16A7D3'></CircularProgression>

                {/* Overdue */}
                <CircularProgression title='Overdue' balance='৳ 47,412.52' count='48' iconName={icon} outlineCOlor='#FF7D00'></CircularProgression>
                {/* Paid */}
                <CircularProgression title='Paid' balance='৳ 97,412.52' count='53' iconName={icon} outlineCOlor='#57CC99'></CircularProgression>
                {/* Upcoming Invoice */}
                <CircularProgression title='Upcoming Invoice' balance='৳ 31,215' count='76' iconName={icon} outlineCOlor='#FFBB00'></CircularProgression>
      
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
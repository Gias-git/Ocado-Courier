import React from 'react';
import InvoiceSummary from './Componets/InvoiceSummary';
import ParcelTable from './Componets/ParcelTable ';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const PaymentChildrenView = () => {
    const {pathname} = useLocation()
    return (
        <div className='pb-20'>
            {/* Breadcrumbs */}
            <div>
                <div className='my-9 flex  items-center'>
                    <Link to='/paymentInvoiceList'> <h1 className='text-lg font-semibold'>Invoice </h1> </Link>
                    {pathname == '/paymentInvoiceList' && ''}
                    {pathname == '/paymentInvoiceList/paymentChildrenView' && <h1 className='text-lg flex justify-center items-center font-semibold text-primaryColor'> <IoIosArrowForward ></IoIosArrowForward > - 54SDF55444</h1>}
                </div>
            </div>
            <div>
                <InvoiceSummary></InvoiceSummary>
            </div>

            <div>
                <ParcelTable></ParcelTable>
            </div>
        </div>
    );
};

export default PaymentChildrenView;
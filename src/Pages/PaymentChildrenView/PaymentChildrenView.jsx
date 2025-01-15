import React from 'react';
import InvoiceSummary from './Componets/InvoiceSummary';
import ParcelTable from './Componets/ParcelTable ';

const PaymentChildrenView = () => {
    return (
        <div>
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
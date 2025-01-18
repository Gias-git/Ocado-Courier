import React, { useState } from 'react';
import CircularProgression from './Components/CircularProgression';
import InvoiceTableList from './Components/InvoiceTableList';
import PaymentInvoicePagination from './Components/PaymentInvoicePagination';
import { GrDocumentText } from 'react-icons/gr';
import { DatePicker } from 'antd';
import { LuRefreshCcw } from 'react-icons/lu';
import { FaDownload, FaPrint } from 'react-icons/fa';

const { RangePicker } = DatePicker;

const PaymentInvoiceList = () => {
    const [dates, setDates] = useState(null);
    const [mobileDateFilterFirstDate, setMobileDateFilterFirstDate] = useState(null);
    const [mobileDateFilterSecondDate, setMobileDateFilterSecondDate] = useState(null);


    const handleFirstDateChange = (date, dateString) => {
        setMobileDateFilterFirstDate(dateString);
        if (dateString && mobileDateFilterSecondDate) {
            setDates([dateString, mobileDateFilterSecondDate]);
        }
    };

    const handleSecondDateChange = (date, dateString) => {
        setMobileDateFilterSecondDate(dateString);
        if (mobileDateFilterFirstDate && dateString) {
            setDates([mobileDateFilterFirstDate, dateString]);
        }
    };

    console.log(dates)

    const icon = (
        <>
            <GrDocumentText />
        </>
    );

    // For Desktop
    const handleDateChange = (dates, dateStrings) => {
        setDates(dateStrings);
        console.log("Selected Dates:", dateStrings); // Logs the selected dates as strings
    };

    return (
        <div>
            {/* Circular Progression Container */}
            <div className="bg-white grid grid-cols-2 lg:grid-cols-4 justify-evenly py-2">
                {/* Total Invoice */}
                <CircularProgression
                    title="Total Invoice"
                    balance="৳ 194192"
                    count="45"
                    iconName={icon}
                    outlineCOlor="#16A7D3"
                />
                {/* Overdue */}
                <CircularProgression
                    title="Overdue"
                    balance="৳ 47,412.52"
                    count="48"
                    iconName={icon}
                    outlineCOlor="#FF7D00"
                />
                {/* Paid */}
                <CircularProgression
                    title="Paid"
                    balance="৳ 97,412.52"
                    count="53"
                    iconName={icon}
                    outlineCOlor="#57CC99"
                />
                {/* Upcoming Invoice */}
                <CircularProgression
                    title="Upcoming Invoice"
                    balance="৳ 31,215"
                    count="76"
                    iconName={icon}
                    outlineCOlor="#FFBB00"
                />
            </div>

            {/* Sort Section */}
            <div className="bg-white border-[0.5px] rounded-md py-4 my-4">



                {/* Desktop View */}
                <div className="hidden lg:flex flex-col gap-4 lg:flex-row lg:justify-around items-center px-6 rounded-md">
                    {/* Title */}
                    <div className="text-xl hidden lg:block font-medium">
                        <h1>Delivery Parcel List | 03 Parcels</h1>
                        <hr className="border-2 border-primaryColor w-3/12" />
                    </div>

                    {/* By Date Filter */}
                    <div>
                        <div className="w-full lg:w-auto">
                            <RangePicker
                                style={{ width: '100%' }}
                                onChange={handleDateChange}
                                placeholder={['Start Date', 'End Date']}
                                format="DD-MM-YYYY"
                            />
                        </div>
                    </div>

                    {/* Filter by Parcel ID Name/Phone */}
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input type="text" className="grow" placeholder="Parcel ID Name/Phone" />
                        </label>
                    </div>

                    <div className="flex gap-6 flex-col lg:flex-row">
                        {/* Execute Buttons */}
                        <div className="flex justify-center gap-10 text-lg text-primaryColor items-center">
                            <LuRefreshCcw />
                            <FaDownload />
                            <FaPrint />
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden space-y-5 px-3">
                    <div className="flex justify-between">
                        {/* Title */}
                        <div className="text-xl lg:hidden font-medium">
                            <h1>Delivery Parcel List | 03 Parcels</h1>
                            <hr className="border-2 border-primaryColor w-3/12" />
                        </div>
                        <div className="text-primaryColor">
                            <FaDownload />
                        </div>
                    </div>

                    {/* Filter by Parcel ID Name/Phone */}
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1-1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input type="text" className="grow" placeholder="Parcel ID Name/Phone" />
                        </label>
                    </div>



                    {/* By Date Filter */}

                    <div className="">
                        <div className="w-full flex gap-6">
                            <DatePicker
                                style={{ width: '100%' }}
                                placeholder="Select From"
                                format="DD-MM-YYYY"
                                onChange={handleFirstDateChange} // Use specific handler for first date
                            />
                            <DatePicker
                                style={{ width: '100%' }}
                                placeholder="Select To"
                                format="DD-MM-YYYY"
                                onChange={handleSecondDateChange} // Use specific handler for second date
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* Invoice Table List */}
            <div>
                <InvoiceTableList />
            </div>

            {/* Pagination */}
            <div className="mt-10 mb-20">
                <PaymentInvoicePagination />
            </div>
        </div>
    );
};

export default PaymentInvoiceList;

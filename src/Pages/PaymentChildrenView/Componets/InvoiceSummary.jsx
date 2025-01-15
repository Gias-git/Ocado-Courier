import React from "react";
import { FaDownload, FaPrint } from "react-icons/fa";

const InvoiceSummary = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
            {/* Statistics Section */}
            <div className="flex space-x-8">
                {/* Parcel Count */}
                <div className="flex flex-col  border-l-4 px-4 border-primaryColor">


                    <h2 className="text-sm font-medium text-gray-700">Parcel Count</h2>

                    <p className="text-sm font-medium text-gray-800">৳ 0</p>
                </div>

                {/* Delivered Collected */}
                <div className="flex flex-col  border-l-4 px-4 border-primaryColor">


                    <h2 className="text-sm font-medium text-gray-700"> Delivered Collected</h2>

                    <p className="text-sm font-medium text-gray-800">৳ 0</p>
                </div>

                {/* Total Cost */}
                <div className="flex flex-col  border-l-4 px-4 border-primaryColor">


                    <h2 className="text-sm font-medium text-gray-700">Total Cost</h2>

                    <p className="text-sm font-medium text-gray-800">৳ 0</p>
                </div>

                {/* Total Payable Amount */}
                <div className="flex flex-col  border-l-4 px-4 border-primaryColor">


                    <h2 className="text-sm font-medium text-gray-700">Total Payable Amount</h2>

                    <p className="text-sm font-medium text-gray-800 text-left">৳ 0</p>
                </div>

            </div>

            {/* Search and Actions Section */}
            <div className="flex items-center space-x-4">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Parcel ID Name/Phone"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />

                {/* Download Icon */}
                <button className="p-2 text-red-500 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FaDownload size={16} />
                </button>

                {/* Print Icon */}
                <button className="p-2 text-red-500 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FaPrint size={16} />
                </button>
            </div>
        </div>
    );
};

export default InvoiceSummary;

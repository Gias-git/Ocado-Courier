import React, { useState } from "react";
import { BiRectangle } from "react-icons/bi";
import { CiSquareCheck } from "react-icons/ci";
import { FaBoxOpen, FaDownload, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiDocumentDuplicate, HiMiniDocumentMinus } from "react-icons/hi2";
import { Link } from "react-router-dom";

const InvoiceTableList = () => {
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [selectedInvoices, setSelectedInvoices] = useState({});

    const invoices = [
        {
            id: 1,
            creationDate: "26-10-2024",
            invoiceId: "S45DSF5444",
            collected: "48,548",
            deliveryCost: "650",
            codCost: "485.48",
            payableAmount: "47,412.52",
            invoiceCount: 25,
            status: "Unpaid",
        },
        {
            id: 2,
            creationDate: "24-10-2024",
            invoiceId: "S45DSF5444",
            collected: "98,548",
            deliveryCost: "750",
            codCost: "985.48",
            payableAmount: "97,412.52",
            invoiceCount: 56,
            status: "Paid",
        },
        {
            id: 3,
            creationDate: "22-10-2024",
            invoiceId: "S45DSF5444",
            collected: "48,548",
            deliveryCost: "650",
            codCost: "485.48",
            payableAmount: "47,412.52",
            invoiceCount: 22,
            status: "Paid",
        },
        {
            id: 4,
            creationDate: "20-10-2024",
            invoiceId: "S45DSF5444",
            collected: "48,548",
            deliveryCost: "650",
            codCost: "485.48",
            payableAmount: "47,412.52",
            invoiceCount: 29,
            status: "Paid",
        },
    ];

    // Handle "Select All"
    const handleSelectAll = () => {
        const newSelectionState = {};
        if (!isAllSelected) {
            invoices.forEach((invoice) => {
                newSelectionState[invoice.id] = true;
            });
        }
        setSelectedInvoices(newSelectionState);
        setIsAllSelected(!isAllSelected);
    };

    // Handle individual checkbox
    const handleSelectIndividual = (id) => {
        const newSelectionState = { ...selectedInvoices, [id]: !selectedInvoices[id] };
        setSelectedInvoices(newSelectionState);

        // Update "Select All" state
        const allSelected = invoices.every((invoice) => newSelectionState[invoice.id]);
        setIsAllSelected(allSelected);
    };

    return (
        <div className="overflow-x-auto">

            {/* Desktop View */}
            <div className="hidden lg:block">
                <table className="w-full text-left text-sm border border-gray-300 rounded-md">
                    <thead className="bg-gray-100">
                        <tr className="text-gray-600 font-medium">
                            <th className="py-2 px-4 text-2xl">
                                <input
                                    type="checkbox"
                                    className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="py-2 px-4 text-center mx-auto">Invoice Creation Date</th>
                            <th className="py-2 px-4 text-center mx-auto">Invoice ID</th>
                            <th className="py-2 px-4 text-center mx-auto">Collected</th>
                            <th className="py-2 px-4 text-center mx-auto">Delivery Cost</th>
                            <th className="py-2 px-4 text-center mx-auto">COD Cost</th>
                            <th className="py-2 px-4 text-center mx-auto">Payable Amount</th>
                            <th className="py-2 px-4 text-center mx-auto">invoice Count</th>
                            <th className="py-2 px-4 text-center mx-auto">Status</th>
                            <th className="py-2 px-4 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <tr
                                key={invoice.id}
                                className={`${invoice.id % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } border-t`}
                            >
                                <td className="py-2 px-4 mx-auto">
                                    <input
                                        type="checkbox"
                                        className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                                        checked={!!selectedInvoices[invoice.id]}
                                        onChange={() => handleSelectIndividual(invoice.id)}
                                    />
                                </td>
                                <td className="py-2 px-4 text-center mx-auto">{invoice.creationDate}</td>
                                <td className="py-2 px-4 text-red-500 text-center mx-auto"> <a href="#">{invoice.invoiceId}</a></td>
                                <td className="py-2 px-4 text-center mx-auto">৳ {invoice.collected}</td>
                                <td className="py-2 px-4 text-center mx-auto">৳ {invoice.deliveryCost}</td>
                                <td className="py-2 px-4 text-center mx-auto">৳ {invoice.codCost}</td>
                                <td className="py-2 px-4 text-center mx-auto">৳ {invoice.payableAmount}</td>
                                <td className="py-2 px-4 text-center mx-auto">{invoice.invoiceCount}</td>
                                <td className="py-2 px-4 text-center mx-auto">
                                    <span
                                        className={`px-3 py-1 text-sm rounded ${invoice.status === "Paid"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {invoice.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4">
                                    <Link to="/paymentInvoiceList/paymentChildrenView">
                                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





            {/* Table Mobile View */}

            <div className="w-full lg:hidden rounded-lg bg-white space-y-5 p-3 mb-12 text-[#777777]">
                {invoices.map((invoice) => (
                    <div
                        key={invoice.id}
                        className="min-h-[177px] p-3 border-[1px] border-primaryColor rounded-lg"
                    >

                        {/* download button & date */}

                        <div className="flex justify-between mb-3">
                            <h1 className="font-medium  items-center">
                                {invoice.creationDate}
                            </h1>
                            <h1 className="font-medium text-primaryColor items-center">
                               <FaDownload></FaDownload>
                            </h1>
                        </div>

                        {/* Invoice Id */}
                        <div className="flex justify-between ">
                            <p>
                                P. ID:{" "}
                                <span className="text-red-500">{invoice.invoiceId}</span>
                            </p>
                            <button
                                className={`px-2 py-1 flex gap-3 justify-center items-center text-[12px] font-semibold w-[65px] rounded bg-[#EAFAF8] text-[#258073] border-[1px] border-[#258073] `}
                            >
                                {invoice.status}

                            </button>

                        </div>


                        {/* Collected Amount */}

                        <div className="flex justify-between mt-3 ">
                            <h1 className="font-medium  items-center">
                                Collected Amount
                            </h1>
                            <h1 className="">৳ {invoice.collected}</h1>
                        </div>

                        {/* Payable Amount */}

                        <div className="flex justify-between ">
                            <h1 className="font-medium  items-center">
                                Payable Amount
                            </h1>
                            <h1 className="">৳ {invoice.payableAmount}</h1>
                        </div>

                        {/*  Delivery Cost  */}

                        <div className="flex justify-between ">
                            <h1 className="font-medium  items-center">
                                Delivery Cost
                            </h1>
                            <h1 className="">৳ {invoice.deliveryCost}</h1>
                        </div>





                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvoiceTableList;

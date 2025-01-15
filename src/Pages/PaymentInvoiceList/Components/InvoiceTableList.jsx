import React from "react";
import { BiRectangle } from "react-icons/bi";
import { CiSquareCheck } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { Link } from "react-router-dom";

const InvoiceTableList = () => {
    const invoices = [
        {
            creationDate: "26-10-2024",
            invoiceId: "S45DSF5444",
            collected: "48,548",
            deliveryCost: "650",
            codCost: "485.48",
            payableAmount: "47,412.52",
            parcelCount: 25,
            status: "Unpaid",
        },
        {
            creationDate: "24-10-2024",
            invoiceId: "S45DSF5444",
            collected: "98,548",
            deliveryCost: "750",
            codCost: "985.48",
            payableAmount: "97,412.52",
            parcelCount: 56,
            status: "Paid",
        },
        {
            creationDate: "22-10-2024",
            invoiceId: "S45DSF5444",
            collected: "48,548",
            deliveryCost: "650",
            codCost: "485.48",
            payableAmount: "47,412.52",
            parcelCount: 22,
            status: "Paid",
        },
        {
            creationDate: "20-10-2024",
            invoiceId: "S45DSF5444",
            collected: "48,548",
            deliveryCost: "650",
            codCost: "485.48",
            payableAmount: "47,412.52",
            parcelCount: 29,
            status: "Paid",
        },
    ];

    return (
        <div className="overflow-x-auto ">
            <div className="hidden lg:block">
            <table className="w-full text-left text-sm border border-gray-300 rounded-md">
                <thead className="bg-gray-100">
                    <tr className="text-gray-600 font-medium">
                        <th className="py-2 px-4 text-2xl"><CiSquareCheck /></th>
                        <th className="py-2 px-4">Invoice Creation Date</th>
                        <th className="py-2 px-4">Invoice ID</th>
                        <th className="py-2 px-4">Collected</th>
                        <th className="py-2 px-4">Delivery Cost</th>
                        <th className="py-2 px-4">COD Cost</th>
                        <th className="py-2 px-4">Payable Amount</th>
                        <th className="py-2 px-4">Parcel Count</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } border-t`}
                        >
                            <td className="py-2 px-4"> <input
                                type="checkbox"
                                className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                            /> </td>
                            <td className="py-2 px-4">{invoice.creationDate}</td>
                            <td className="py-2 px-4 text-red-500">{invoice.invoiceId}</td>
                            <td className="py-2 px-4">৳ {invoice.collected}</td>
                            <td className="py-2 px-4">৳ {invoice.deliveryCost}</td>
                            <td className="py-2 px-4">৳ {invoice.codCost}</td>
                            <td className="py-2 px-4">৳ {invoice.payableAmount}</td>
                            <td className="py-2 px-4">{invoice.parcelCount}</td>
                            <td className="py-2 px-4">
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
                                <Link to='/paymentInvoiceList/paymentChildrenView'> <button className="bg-red-500 text-white px-4 py-2 rounded">
                                    View
                                </button> </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
           

            <div className="p-4 space-y-4 bg-white lg:hidden">
                {invoices.map((invoice, index) => (
                    <div
                        key={index}
                        className="border-2 border-red-300 rounded-md p-4 flex flex-col space-y-2"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-medium text-[#777777]">{invoice.creationDate}</p>
                            <button className="text-red-500 text-lg">
                                <FaDownload />
                            </button>
                        </div>
                        {/* Invoice ID */}
                        <div className="flex justify-between items-center">
                            <p className="text-sm flex gap-3">
                                <span className="font-medium text-[#777777]">In. ID:</span>{" "}
                                <span className="text-red-500 font-medium flex justify-center items-center gap-4">{invoice.invoiceId} <HiDocumentDuplicate className="text-[#81D56B]" /></span>
                            </p>
                            <button
                                className={`px-2 py-1 text-xs rounded-md ${invoice.status === "Paid"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-600"
                                    }`}
                            >
                                {invoice.status}
                            </button>
                        </div>
                        {/* Amount Details */}
                        <div className="text-sm space-y-1">
                            <p className="flex justify-between">
                                <div className="font-medium text-[#777777]">Collected Amount:</div>{" "}

                                <div className="text-[#777777]">
                                    ৳ {invoice.collected}
                                </div>
                            </p>

                            <p className="flex justify-between">
                                <div className="font-medium text-[#777777]">Delivery Cost:</div>
                                <div className="text-[#777777]">৳ {invoice.deliveryCost}</div>
                            </p>
                            <p className="flex justify-between">
                                <div className="font-medium text-[#777777]">COD Cost:</div>
                                <div className="text-[#777777]">৳ {invoice.codCost}</div>
                            </p>
                            <p className="flex justify-between">
                                <div className="font-medium text-[#777777]">Payable Amount:</div>
                                <div className="text-[#777777]">৳ {invoice.payableAmount}</div>
                            </p>
                            <p className="flex justify-between">
                                <div className="font-medium text-[#777777]">Parcel Count:</div>
                                <div className="text-[#777777]">{invoice.parcelCount}</div>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvoiceTableList;

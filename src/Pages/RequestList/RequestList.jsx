import { FaBoxOpen, FaPhoneAlt, FaUser } from "react-icons/fa";
import SortingHeading from "./SortingHeading";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniDocumentMinus } from "react-icons/hi2";
import { Pagination, TablePagination } from "@mui/material";
import { useState } from "react";
import PaginationComponent from "./PaginationComponent ";


const RequestList = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const totalItems = 100; // Example, replace with actual count of items


    const handleChangeRowsPerPage = () => {
        console.log(value)
        setRowsPerPage(parseInt(event.target.value));
        const totalPages = Math.ceil(totalItems / rowsPerPage); // Calculate total pages
        setPage(totalPages); // Reset page when rows per page change
    };

    const parcels = [
        {
            creationDate: "28/09/2024",
            creationTime: "08:24 AM",
            parcelID: "54458724543",
            orderID: "644",
            customerName: "Abdul Golam",
            address: "Mirpur DOHS Central Masjid, Road No. 7, Avenue 8",
            phone: "01636073552",
            parcelStatus: false,
            deliveryNote: "Note: kalkel delivery dite hobe. memo niya ante hobe",
            collectedAmount: "45,219",
            value: "50,000",
            charge: "582.19",
            actions: ["View", "Edit"],
        },
        {
            creationDate: "28/09/2024",
            creationTime: "08:24 AM",
            parcelID: "54458724543",
            orderID: "644",
            customerName: "Abdul Golam",
            address: "Mirpur DOHS aaaaaaaaaasdasdadasdsssss Central Masjid, Road No. 7, Avenue 8",
            phone: "01636073552",
            parcelStatus: true,
            deliveryNote: "Note: kalkel delivery ante hobe",
            collectedAmount: "45,219",
            value: "50,000",
            charge: "582.19",
            actions: ["View", "Edit"],
        }
    ]
    return (
        <div className='mt-6 mb-10'>
            {/* Hading */}
            <div>
                <h1 className='text-2xl font-bold font-lato'>Parcel Request List</h1>
            </div>


            {/* Input & sorting section */}

            <SortingHeading></SortingHeading>


            {/* table section */}


            {/* Desktop View */}
            <div className="hidden md:block   mt-3">
                <table className="w-full rounded-lg bg-white">
                    <thead className="rounded-lg">
                        <tr className="bg-[#FAFAFA] text-sm font-medium text-[#152934D9] my-4 ">
                            <th className="border border-gray-200 px-4 py-2 border-l-2">Creation Info</th>
                            <th className="border border-gray-200 px-4 py-2">Parcel ID</th>
                            <th className="border border-gray-200 px-4 py-2">Customer Details</th>
                            <th className="border border-gray-200 px-4 py-2">Parcel Status</th>
                            <th className="border border-gray-200 px-4 py-2">Delivery Note</th>
                            <th className="border border-gray-200 px-4 py-2">Amount</th>
                            <th className="border border-gray-200 px-4 py-2  shadow-left ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={index} className="border-t">
                                <td className="border px-4 py-2 text-center">
                                    {parcel.creationDate}
                                    <br />
                                    {parcel.creationTime}
                                </td>
                                <td className="border px-4 py-2">
                                    <span className="text-red-500">{parcel.parcelID}</span>
                                    <br />
                                    Order ID: {parcel.orderID}
                                </td>
                                <td className="border px-4  max-w-[300px]">
                                    <ul className=" space-y-3 ">
                                        <li className="font-medium flex gap-2 items-center"><FaUser />{parcel.customerName}</li>
                                        <li className="flex gap-2 "> <div>  <FaLocationDot className="mt-1" /> </div>{parcel.address}</li>
                                        <li className="flex gap-2 "> <FaPhoneAlt className="mt-1" />{parcel.phone}</li>
                                    </ul>


                                </td>
                                <td className="border px-4 py-2">
                                    <button
                                        className={`px-2 py-1 flex gap-3 justify-center items-center text-sm font-semibold rounded ${parcel.parcelStatus ? "bg-[#FFBEBE99] text-red-700"
                                            : "bg-[#16E36826] text-[#14885F]"
                                            }`}
                                    >
                                        {parcel.parcelStatus || <> <FaBoxOpen /> Parcel Request</>}
                                        {parcel.parcelStatus && <> <HiMiniDocumentMinus /> Cancelled</>}

                                    </button>
                                </td>
                                <td className="border px-4 py-2 max-w-[225px]">{parcel.deliveryNote}</td>
                                <td className="border px-4 py-2 space-y-3">
                                    <p> <span className="font-semibold"> Collected: </span> ৳ {parcel.collectedAmount}</p>
                                    <p> <span className="font-semibold">  Value: </span>  ৳ {parcel.value}</p>
                                    <p><span className="font-semibold">Charge: </span>  ৳ {parcel.charge}</p>
                                </td>
                                <td className="border p-12 shadow-left ">
                                    <div className="flex flex-col space-y-2">
                                        <button className="text-[white] bg-[#E83330] px-4 py-2 rounded-md">View</button>
                                        <button className="text-[#E83330] bg-[white] px-4 py-2 border-2 border-[#E83330] rounded-md">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="7" class="border border-gray-300 px-4 py-2 text-left">1 to 20 of 3 parcels</td>
                        </tr>
                    </tfoot>

                </table>
            </div>




            {/* Paginate */}

            <div className="mt-6">

                <PaginationComponent></PaginationComponent>
            </div>

        </div>
    );
};

export default RequestList;
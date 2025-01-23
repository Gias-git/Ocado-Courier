import { FaBoxOpen, FaPhoneAlt, FaUser } from "react-icons/fa";
import SortingHeading from "./SortingHeading";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniDocumentMinus } from "react-icons/hi2";
import { Pagination, TablePagination } from "@mui/material";
import { useState } from "react";

import { CiSquareCheck } from "react-icons/ci";
import { Link } from "react-router-dom";


const RequestList = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const totalItems = 100; // Example, replace with actual count of items


    const handleChangeRowsPerPage = () => {
        setRowsPerPage(parseInt(event.target.value));
        const totalPages = Math.ceil(totalItems / rowsPerPage); // Calculate total pages
        setPage(totalPages); // Reset page when rows per page change
    };

    const Requesparcels = [
        {
            creationDate: "28/09/2024",
            creationTime: "08:24 AM",
            parcelID: "54458724543",
            orderID: "644",
            customerName: "Rahman",
            address: "Mirpur DOHS Central Masjid, Road No. 7, Avenue 8",
            phone: "01636073552",
            parcelStatus: false,
            deliveryNote: "Note: kalkel delivery dite hobe. memo niya ante hobe",
            collectedAmount: "45,219",
            value: "50,000",
            charge: "582.19",
            actions: ["View", "Edit"],
            paid: false
        },
        {
            creationDate: "28/09/2024",
            creationTime: "08:24 AM",
            parcelID: "54458724543",
            orderID: "644",
            customerName: "Abdul Golam",
            address: "Mirpur DOHS aaaaaaaaaa sdasdadasdsssss Central Masjid, Road No. 7, Avenue 8",
            phone: "01636073552",
            parcelStatus: true,
            deliveryNote: "Note: kalkel delivery ante hobe",
            collectedAmount: "45,219",
            value: "50,000",
            charge: "582.19",
            actions: ["View", "Edit"],
            paid: false
        }
    ]
    return (
        <div className='mt-6 pb-20'>
            {/* Hading */}
            <div>
                <h1 className='text-2xl font-bold font-lato'>Parcel Request List</h1>
            </div>


            {/* Input & sorting section */}

            <div className="">
                <SortingHeading></SortingHeading>
            </div>




            {/* table section */}


            {/* Desktop View */}
            <div className="hidden  lg:w-[900px] xl:w-full lg:block overflow-x-scroll  mt-3">
                <table className="w-full rounded-lg bg-white">
                    <thead className="rounded-lg">
                        <tr className="bg-[#FAFAFA] text-sm font-medium text-[#152934D9] my-4 ">

                            <th className="border border-gray-200 px-4 py-2 border-l-2">Creation Info</th>
                            <th className="border border-gray-200 px-4 py-2">Parcel ID</th>
                            <th className="border border-gray-200 px-4 py-2">Customer Details</th>
                            <th className="border border-gray-200 px-4 py-2 ">Parcel Status</th>
                            <th className="border border-gray-200 px-4 py-2">Delivery Note</th>
                            <th className="border border-gray-200 px-4 py-2">Amount</th>
                            <th className="border border-gray-200 px-4 py-2  ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Requesparcels.map((parcel, index) => (
                            <tr key={index} className="border-t">

                                <td className="border px-4 py-2 text-center">
                                    {parcel.creationDate}
                                    <br />
                                    {parcel.creationTime}
                                </td>
                                <td className="border px-4 py-2">
                                   <a href="#"><span className="text-red-500">{parcel.parcelID}</span></a> 
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
                                <td className="border  px-4 py-2">
                                    <button
                                        className={`px-2 py-1 mx-auto flex gap-3 justify-center items-center text-sm font-semibold rounded ${parcel.parcelStatus ? "bg-[#FFBEBE99] text-red-700"
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
                                <td className="border p-12">
                                    <div className="flex flex-col space-y-2">
                                       <Link to='/requestList/parcelView' className="block  px-4 py-2 text-[white] bg-[#E83330] rounded-md text-center"><button className="">View</button> </Link> 
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



            {/* Table Mobile View */}

            <div className='w-full lg:hidden rounded-lg bg-white space-y-5 p-3 mb-12'>

                {
                    Requesparcels.map((parcel) => {
                        // Parcel container
                        return <div className='min-h-[177px] p-3 border-[1px] border-primaryColor rounded-lg '>

                            {/* parcel  Status*/}
                            <div className='flex justify-center items-center'>
                                <button
                                    className={`px-2 py-1 flex gap-3 justify-center items-center text-sm font-semibold rounded ${parcel.parcelStatus ? "bg-[#FFBEBE99] text-red-700"
                                        : "bg-[#16E36826] text-[#14885F]"
                                        }`}
                                >
                                    {parcel.parcelStatus || <> <FaBoxOpen /> Parcel Request</>}
                                    {parcel.parcelStatus && <> <HiMiniDocumentMinus /> Return with Delivery Charge</>}

                                </button>
                            </div>



                            <div className='flex gap-4 mt-4'>

                                <div className='text-sm w-1/2 flex flex-col items-start gap-1'>
                                    <p> P. ID: <a href="#"><span className="text-red-500">{parcel.parcelID}</span> </a>  </p>
                                    <h1 className="font-medium flex gap-2 items-center"><FaUser />{parcel.customerName}</h1>
                                    <h1 className="flex gap-2 "> <div>  <FaLocationDot className="mt-1" /> </div> <div>{parcel.address} </div></h1>
                                    <h1 className='text-[#1B6EC0] font-medium'>(Regular)</h1>
                                </div>

                                <div className='text-sm w-1/2 flex flex-col items-end gap-1'>
                                    <button
                                        className={`px-2 py-1 flex gap-3 justify-center items-center text-[12px] font-semibold w-[65px] rounded bg-[#EAFAF8] text-[#258073] border-[1px] border-[#258073] `}
                                    >
                                        {parcel.paid || <> Paid</>}
                                        {parcel.paid && <>  Unpaid</>}

                                    </button>
                                    <h1 className="font-medium flex gap-2 items-center"><FaPhoneAlt className="mt-1" />{parcel.phone}</h1>
                                    <h1 className="flex gap-2 ">৳ 10,000</h1>
                                    <h1 className=' font-medium'>৳ 282.19</h1>
                                </div>

                            </div>

                        </div>
                    })
                }
            </div>





        </div>
    );
};

export default RequestList;
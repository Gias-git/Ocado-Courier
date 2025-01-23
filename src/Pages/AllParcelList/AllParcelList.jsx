import React, { useState } from 'react';
import SortingSection from './Components/SortingSection';
import { FaBoxOpen, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { HiMiniDocumentMinus } from 'react-icons/hi2';
import PaginationComponent from './Components/PaginationComponent ';
import ProgressionSateSection from './Components/PregressionsSatSection';
import ParcelNotFound from '../../Components/ParcelNotFound';

const AllParcelList = () => {
    const [isAllSelected, setIsAllSelected] = useState(false)
    const [selectedParcels, setSelectedParcels] = useState({});

    const parcels = [
        {
            id: 1, // Unique ID for each parcel
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
            paid: false,
        },
        {
            id: 2,
            creationDate: "28/09/2024",
            creationTime: "08:24 AM",
            parcelID: "54458724543",
            orderID: "644",
            customerName: "Abdul Golam",
            address: "Mirpur DOHS aaaaaaaaaa Central Masjid, Road No. 7, Avenue 8",
            phone: "01636073552",
            parcelStatus: true,
            deliveryNote: "Note: kalkel delivery ante hobe",
            collectedAmount: "45,219",
            value: "50,000",
            charge: "582.19",
            actions: ["View", "Edit"],
            paid: true,
        },
        {
            id: 3,
            creationDate: "28/09/2024",
            creationTime: "08:24 AM",
            parcelID: "54458724543",
            orderID: "644",
            customerName: "Abdul Golam",
            address: "Mirpur DOHS aaaaaaaaaa Central Masjid, Road No. 7, Avenue 8",
            phone: "01636073552",
            parcelStatus: true,
            deliveryNote: "Note: kalkel delivery ante hobe",
            collectedAmount: "45,219",
            value: "50,000",
            charge: "582.19",
            actions: ["View", "Edit"],
            paid: true,
        }
    ];

    // Handle "Select All"
    const handleSelectAll = () => {
        const newSelectionState = {};
        if (!isAllSelected) {
            parcels.forEach((parcel) => {
                newSelectionState[parcel.id] = true;
            });
        }
        setSelectedParcels(newSelectionState);
        setIsAllSelected(!isAllSelected);
    };

    // Handle individual checkbox
    const handleSelectIndividual = (id) => {
        const newSelectionState = { ...selectedParcels, [id]: !selectedParcels[id] };
        setSelectedParcels(newSelectionState);

        // Update "Select All" state
        const allSelected = parcels.every((parcel) => newSelectionState[parcel.id]);
        setIsAllSelected(allSelected);
    };

    if (parcels.length == 0) {
        return <ParcelNotFound></ParcelNotFound>
    }



    return (
        <div className='mt-6 mb-64'>

            {/* Hading */}
            <div>
                <h1 className='text-2xl font-bold font-lato'>All Parcel List</h1>
            </div>


            {/* Progression Sate Sectionsection */}

            <div className=' lg:block'>
                <ProgressionSateSection></ProgressionSateSection>
            </div>


            {/* Sorting Section */}
            <div className=''>
                <SortingSection></SortingSection>
            </div>



            {/* Desktop View */}
            <div className="hidden xl:block   mt-3">
                <table className="w-full rounded-lg bg-white">
                    <thead className="rounded-lg">
                        <tr className="bg-[#FAFAFA] text-sm font-medium text-[#152934D9] my-4 ">
                            <th onClick={handleSelectAll} className="border border-gray-200 px-4 py-2 border-l-2 text-4xl">
                                <input
                                    type="checkbox"
                                    className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="border border-gray-200 px-4 py-2 border-l-2">Creation Info</th>
                            <th className="border border-gray-200 px-4 py-2">Parcel ID</th>
                            <th className="border border-gray-200 px-4 py-2">Customer Details</th>
                            <th className="border border-gray-200 px-4 py-2">Parcel Status</th>
                            <th className="border border-gray-200 px-4 py-2">Delivery Note</th>
                            <th className="border border-gray-200 px-4 py-2">Amount</th>
                            <th className="border border-gray-200 px-4 py-2 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={index} className="border-t">
                                <td className="border px-4 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        className="checkbox border-[#E83330] [--chkbg:#E83330] [--chkfg:white] checked:border-[#E83330]"
                                        checked={!!selectedParcels[parcel.id]}
                                        onChange={() => handleSelectIndividual(parcel.id)}
                                    />
                                </td>
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
                                <td className="border px-4 py-2">
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
                                <td className="border p-12  ">
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
                            <td colSpan="8" className="border border-gray-300 px-4 py-2 text-left">1 to 20 of 3 parcels</td>

                        </tr>
                    </tfoot>

                </table>
            </div>


            {/* Table Mobile View */}

            <div className='w-full xl:hidden rounded-lg bg-white space-y-5 p-3 mb-12'>

                {
                    parcels.map((parcel) => {
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
                                    <p> P. ID: <span className="text-red-500">{parcel.parcelID}</span> </p>
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


            {/* Paginate */}

            <div className="mt-6 ">

                <PaginationComponent></PaginationComponent>
            </div>

        </div>
    );
};

export default AllParcelList;
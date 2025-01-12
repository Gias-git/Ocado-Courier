import React from 'react';
import TimelineItem from './TimelineItem';
import { FaParachuteBox } from 'react-icons/fa';
// import "./timeline.css";

const TrackingTimeline = () => {
  const timelineData = [
    { date: "Oct 17, 2024", time: "08:18 PM", status: "Delivered", details: "Received by Customer" },
    { date: "Oct 17, 2024", time: "06:18 PM", status: "Assigned for Carrier", details: "Delivered Getting Soon" },
    { date: "Oct 17, 2024", time: "06:18 PM", status: "Received by Last Mile Hub", details: "Customer Destination Point" },
    { date: "Oct 15, 2024", time: "04:18 PM", status: "Transit Last Mile Hub", details: "Last Mile on the Way" },
    { date: "Oct 12, 2024", time: "04:18 PM", status: "Transit Fulfillment", details: "On the Way" },
    { date: "Oct 15, 2024", time: "04:18 PM", status: "Shorting Agent", details: "Distribution Parcel" },
    { date: "Oct 15, 2024", time: "04:18 PM", status: "Received by Receiver", details: "Picked Up Ambassador" },
    { date: "Oct 15, 2024", time: "04:18 PM", status: "Send to Receiver", details: "Take Point" },
    { date: "Oct 15, 2024", time: "04:18 PM", status: "Parcel Request", details: "Shop Name" },
  ];
  return (
    <div className='flex justify-center items-center mt-8'>
      <div className="timeline flex flex-col ">
        {timelineData.map((item, index) => (
          <div className='flex '>
            {/* Left side container */}
            <div className='text-right px-8 pb-9 border-r-2 border-dashed border-primaryColor relative'>
              <div className='w-[35px] h-[35px] absolute top-0 -right-5 text-primaryColor  flex justify-center items-center rounded-full p-2 border-2 border-primaryColor bg-white shadow-lg text-lg'>
                <FaParachuteBox />
              </div>
              <h1 className='text-sm font-bold'>{item.date} </h1>
              <p className='text-[12px] text-[#C0ADAD] font-medium'>{item.time}</p>
            </div>

            {/* Right Side Conatiner */}
            <div className='text-left px-8 pb-9'>
              <h1 className='text-sm font-bold'>{item.status}</h1>
              <p className='text-[12px] text-[#C0ADAD] font-medium'>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingTimeline;
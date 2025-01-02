import React from "react";

const CircularProgressBar = ({ size = 200, strokeWidth = 10, progress, color, trackColor }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="relative transform -rotate-20" // Adjust rotation for left-side progress
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={trackColor || "#e5e7eb"} // Default gray for the track
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color || "#4ade80"} // Default green for progress
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const CircularProgressDashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-56 h-56 flex justify-center items-center">
        {/* Green Progress */}
        <CircularProgressBar
          size={200}
          strokeWidth={10}
          progress={75} // Percentage of progress
          color="#16a34a"
        />
        {/* Orange Progress */}
        <div className="absolute">
          <CircularProgressBar
            size={160}
            strokeWidth={10}
            progress={60}
            color="#f97316"
          />
        </div>
        {/* Red Progress */}
        <div className="absolute">
          <CircularProgressBar
            size={120}
            strokeWidth={10}
            progress={70}
            color="#dc2626"
          />
        </div>

        {/* Text in Center */}
        <div className="absolute text-center">
          <p className="text-[10px] text-gray-600">Total Amount</p>
          <p className="text-base font-bold text-black">৳ 32,55,464</p>
          <p className="text-[10px] text-gray-600">350 Parcel</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressDashboard;

import React, { useState, useEffect } from "react";

const CircularProgressBar = ({
  size = 200,
  strokeWidth = 10,
  progress,
  color,
  trackColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      style={{ transform: "rotate(-10deg)" }}
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={trackColor || "#e5e7eb"}
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color || "#4ade80"}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 3s ease-in-out",
        }}
      />
    </svg>
  );
};

const CircularProgressDashboard = () => {
  const [progressGreen, setProgressGreen] = useState(0);
  const [progressOrange, setProgressOrange] = useState(0);
  const [progressRed, setProgressRed] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressGreen(90);
      setProgressOrange(70);
      setProgressRed(22);
    }, 500); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-56 h-56 flex justify-center items-center">
        {/* Green Progress */}
        <CircularProgressBar
          size={200}
          strokeWidth={10}
          progress={progressGreen}
          color="#16a34a"
        />
        {/* Orange Progress */}
        <div className="absolute">
          <CircularProgressBar
            size={160}
            strokeWidth={10}
            progress={progressOrange}
            color="#f97316"
          />
        </div>
        {/* Red Progress */}
        <div className="absolute">
          <CircularProgressBar
            size={120}
            strokeWidth={10}
            progress={progressRed}
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

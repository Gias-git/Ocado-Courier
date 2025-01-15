import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToday, setIsToday] = useState(true); // Default toggle state

  const toggleSwitch = () => setIsToday(!isToday);

  return (
    <div
      className={`relative flex items-center shadow-inset-custom w-16 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isToday ? "bg-primaryColor" : "bg-[#F4B555]"
      }`}
      onClick={toggleSwitch}
    >
      {/* Label Text */}
      <span
        className={`absolute left-6 text-[12px] text-[#ffff] text-right font-medium transition-all duration-300 ${
          isToday ? "opacity-100" : "opacity-0"
        }`}
      >
        Today
      </span>
      <span
        className={`absolute right-6  text-[12px] text-[#ffff] font-medium transition-all duration-300 ${
          !isToday ? "opacity-100" : "opacity-0"
        }`}
      >
        Total
      </span>

      {/* Toggle Circle */}
      <div
        className={`absolute w-4 h-4 bg-[#ffff] rounded-full shadow-md transform transition-transform duration-300 ${
          isToday ? "translate-x-0" : "translate-x-[40px]"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;

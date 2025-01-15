import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Day 1", value: 20 },
  { day: "Day 2", value: 35 },
  { day: "Day 3", value: 50 },
  { day: "Day 4", value: 70 },
  { day: "Day 5", value: 90 },
  { day: "Day 6", value: 65 },
  { day: "Day 7", value: 100 },
  { day: "Day 8", value: 80 },
  { day: "Day 9", value: 55 },
  { day: "Day 10", value: 40 },
  { day: "Day 11", value: 100 },
  { day: "Day 12", value: 85 },
  { day: "Day 13", value: 60 },
  { day: "Day 14", value: 100 },
  { day: "Day 15", value: 95 },
  { day: "Day 16", value: 75 },
  { day: "Day 17", value: 50 },
  { day: "Day 18", value: 30 },
  { day: "Day 19", value: 70 },
  { day: "Day 20", value: 90 },
  { day: "Day 21", value: 40 },
  { day: "Day 22", value: 65 },
  { day: "Day 23", value: 100 },
  { day: "Day 24", value: 85 },
  { day: "Day 25", value: 100 },
  { day: "Day 26", value: 95 },
  { day: "Day 27", value: 80 },
  { day: "Day 28", value: 60 },
  { day: "Day 29", value: 75 },
  { day: "Day 30", value: 50 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primaryColor text-[#ffff] px-2 py-1 rounded shadow">
        <p className="text-sm">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const GraphSection = () => {
  return (
    <div className="bg-[#ffff] p-6 rounded-xl shadow-md mt-9">

      <div className="flex justify-between">
        <h2 className="lg:text-lg text-[14px] font-bold mb-4">30 Days Delivered Parcel</h2>
        <div className="flex justify-between items-center mb-4">

          <select className="border rounded px-2 py-1 lg:text-base text-[12px]">
            <option>October</option>
            <option>September</option>
            <option>August</option>
          </select>
        </div>
      </div>




      <div className="hidden lg:block">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />

            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="value"
              stroke="#dc2626"
              fill="rgba(220, 38, 38, 0.2)" // Red with opacity
              strokeWidth={2}
              dot={{ r: 4, fill: "#dc2626" }}
              activeDot={{ r: 8, stroke: "#dc2626", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="lg:hidden">
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart
       
          data={data}>
            <CartesianGrid stroke="#f5f5f5" />

            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="value"
              stroke="#dc2626"
              fill="rgba(220, 38, 38, 0.2)" // Red with opacity
              strokeWidth={2}
              dot={{ r: 4, fill: "#dc2626" }}
              activeDot={{ r: 8, stroke: "#dc2626", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default GraphSection;

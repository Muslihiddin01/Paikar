import React from "react";
import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";

const Dashboard = ({
  icon,
  iconColor,
  bgIconAndShadowColor,
  percentage,
  description,
  numerals,
}) => {
  const boxShadow = `0 10px 25px -5px ${iconColor}55, 0 8px 20px -6px ${iconColor}55`;
  return (
    <article
      style={{ boxShadow: boxShadow }}
      className={`bg-white p-5 rounded-xl flex flex-col space-y-1`}
    >
      <div className="flex items-center justify-between">
        <div
          style={{
            color: `${iconColor}`,
            backgroundColor: `${bgIconAndShadowColor}`,
          }}
          className={`flex items-center justify-center text-2xl p-3 rounded-xl shadow-sm`}
        >
          {icon && React.createElement(icon)}
        </div>
        {percentage && percentage > 0 ? (
          <div className="text-green-500 font-semibold flex items-center gap-1 shadow-sm shadow-black/10 py-1 px-2 rounded-full">
            <IoTrendingUpSharp />
            <p>{percentage}%</p>
          </div>
        ) : (
          <div className="text-red-500 font-semibold flex items-center gap-1 shadow-sm shadow-black/10 py-1 px-2 rounded-full">
            <IoTrendingDownSharp />
            <p>{Math.abs(percentage)}%</p>
          </div>
        )}
      </div>
      <div className="font-semibold text-black/60 mt-3">{description}</div>
      <div className="text-3xl font-bold text-gray-800">{numerals}</div>
    </article>
  );
};

export default Dashboard;

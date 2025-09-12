import React from "react";

const ApplicationCard = ({
  mainColor,
  icon,
  number,
  title,
  bgAndShadowColor,
  rangeColor,
}) => {
  return (
    <article
      style={{ backgroundColor: bgAndShadowColor }}
      className="p-4 shadow-lg rounded-xl font-bold flex flex-col justify-between"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div
            style={{ backgroundColor: mainColor }}
            className={`p-3 rounded-xl w-fit text-white`}
          >
            {icon}
          </div>
          <span style={{ color: mainColor }} className="text-xl">
            {number}
          </span>
        </div>
        <h3 style={{ color: mainColor }}>{title}</h3>
      </div>

      <div
        style={{ backgroundColor: rangeColor }}
        className="py-2 px-5 rounded-xl mt-3 relative"
      >
        <div
          style={{ backgroundColor: mainColor }}
          className="w-1/4 py-2 rounded-full left-0 top-0 absolute"
        ></div>
      </div>
    </article>
  );
};

export default ApplicationCard;

import React from "react";

const ApplicationCardSecond = ({ icon, mainColor, number, title, rangeColor, rangeWidth }) => {
  return (
    <article className="p-4 rounded-xl shadow-lg flex items-center justify-between gap-3">
      <div className="flex gap-3 w-fit items-center">
        <div style={{backgroundColor: mainColor}} className="p-3 rounded-xl text-white  font-semibold w-fit">
          {icon}
        </div>
        <div style={{color: mainColor}} className="font-bold">
            <h3 className="text-xl">{number}</h3>
            <p>{title}</p>
        </div>
      </div>
      <div style={{backgroundColor: rangeColor}} className="relative py-2 px-3 md:w-1/4 rounded-full">
      <div style={{backgroundColor: mainColor}} className={`absolute top-0 left-0 py-2 ${rangeWidth} rounded-full`}></div>
      </div>
    </article>
  );
};

export default ApplicationCardSecond;

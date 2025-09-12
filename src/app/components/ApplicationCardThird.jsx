import React from "react";

const ApplicationCardThird = ({
  icon,
  title,
  description,
  number,
  mainColor,
}) => {
  return (
  <article className="flex items-center gap-3 border-r border-gray-300 p-2">
  <div
    style={{ backgroundColor: mainColor }}
    className="text-white text-xl rounded-xl p-2 flex-shrink-0"
  >
    {icon}
  </div>

  <div className="flex-1 min-w-0">
    <h3 style={{ color: mainColor }} className="font-semibold text-lg truncate">
      {title}
    </h3>
    <p className="text-gray-500 text-sm truncate">{description}</p>
  </div>

  <span
    style={{ backgroundColor: mainColor }}
    className="py-1 px-3 rounded-full text-white flex-shrink-0 ml-2"
  >
    {number}
  </span>
</article>


  );
};

export default ApplicationCardThird;

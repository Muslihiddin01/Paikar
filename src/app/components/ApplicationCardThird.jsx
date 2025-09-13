import React from "react";
import { FaUser } from "react-icons/fa";

const ApplicationCardThird = ({
  icon,
  title,
  description,
  number,
  mainColor,
  cardItems,
  // id,
  // status,
  // descriptionTitle,
  // priority,
  // category,
  // location,
}) => {
  const boxShadow = `0 1px 3px -1px ${mainColor}23, 0 2px 20px -6px ${mainColor}55`;
  return (
    <section className="border-x border-gray-100 rounded-xl p-3 shadow-lg">
      <article className="flex items-center gap-3">
        <div
          style={{ backgroundColor: mainColor }}
          className="text-white text-xl rounded-xl p-2"
        >
          {icon}
        </div>

        <div className="flex-1">
          <h3 style={{ color: mainColor }} className="font-semibold text-lg">
            {title}
          </h3>
          <p className="text-gray-500 text-sm w-fit">{description}</p>
        </div>

        <span
          style={{ backgroundColor: mainColor }}
          className="py-1 px-3 rounded-full text-white ml-2"
        >
          {number}
        </span>
      </article>

      <article
        style={{ boxShadow: boxShadow }}
        className="mt-6 rounded-xl border border-gray-300 shadow-lg p-5"
      >
        <div className="p-3 rounded-xl bg-blue-50 border border-gray-200 shadow-sm relative">
          <span className="font-semibold text-black/75">{cardItems?.id}</span>
          <div
            style={{ backgroundColor: mainColor }}
            className="w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 "
          ></div>
        </div>
        {cardItems?.status && (
          <div
            style={{ backgroundColor: cardItems?.bgColor }}
            className="py-1.5 px-5 mt-2 rounded-xl w-fit text-red-600 font-bold"
          >
            <span>{cardItems?.status}</span>
          </div>
        )}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <p className="text-gray-400">10.09.2025</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="text-green-500">11.09.2025</p>
          </div>
        </div>

        <h3 className="mt-4 font-bold text-xl">{cardItems?.title}</h3>
        <p className="text-gray-500 my-11">{cardItems?.description}</p>
        <div
          style={{ backgroundColor: cardItems?.bgColor, color: mainColor }}
          className="py-1.5 px-3 rounded-xl shadow-sm"
        >
          <p className="font-semibold">
            Приоритет: <span>{cardItems?.priority}</span>
          </p>
        </div>
        <div className="py-1.5 px-3 rounded-xl my-3 shadow-sm bg-teal-50">
          <p className="text-gray-600 font-semibold">
            Категория: <span>{cardItems?.category}</span>
          </p>
        </div>
        <div className="py-1.5 px-3 rounded-xl shadow-sm bg-blue-100 mb-5">
          <p className="text-gray-600 font-semibold">
            Место: <span>{cardItems?.location}</span>
          </p>
        </div>

        <article className="py-5 border-t border-gray-300 flex items-center gap-3">
          <div className="p-3 w-fit rounded-full bg-gray-400/70 text-gray-500">
            <FaUser />
          </div>
          <div>
            <h4 className="font-semibold text-gray-500">Не назначен</h4>
            <p className="text-gray-400/70">Ожидает назначения</p>
          </div>
        </article>
      </article>
    </section>
  );
};

export default React.memo(ApplicationCardThird);
